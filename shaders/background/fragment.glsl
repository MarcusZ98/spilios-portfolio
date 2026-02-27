uniform float iTime;
uniform vec2 iResolution;

#define S(a,b,t) smoothstep(a,b,t)
#define NUM_LAYERS 2.

// --------------------
// Hash
// --------------------
float N21(vec2 p){
    vec3 a = fract(vec3(p.xyx)*vec3(213.897,653.453,253.098));
    a += dot(a, a.yzx+79.76);
    return fract((a.x+a.y)*a.z);
}

// --------------------
// Node Position
// --------------------
vec2 GetPos(vec2 id, vec2 offs, float t){
    float n = N21(id+offs);
    float n1 = fract(n*10.);
    float n2 = fract(n*100.);
    float a = t+n;
    return offs + vec2(sin(a*n1), cos(a*n2))*.4;
}

// --------------------
// Distance To Line
// --------------------
float df_line(vec2 a, vec2 b, vec2 p){
    vec2 pa = p-a, ba = b-a;
    float h = clamp(dot(pa,ba)/dot(ba,ba), 0., 1.);
    return length(pa - ba*h);
}

// --------------------
// Line
// --------------------
float line(vec2 a, vec2 b, vec2 uv){
    float r1 = .03;   // thinner
    float r2 = .008;

    float d = df_line(a,b,uv);
    float d2 = length(a-b);
    float fade = S(1.5,.5,d2);

    return S(r1,r2,d)*fade;
}

// --------------------
// Layer
// --------------------
float NetLayer(vec2 st, float n, float t){

    vec2 id = floor(st)+n;
    st = fract(st)-.5;

    vec2 p[9];
    int i=0;

    for(float y=-1.; y<=1.; y++){
        for(float x=-1.; x<=1.; x++){
            p[i++] = GetPos(id, vec2(x,y), t);
        }
    }

    float m = 0.;

    for(int i=0;i<9;i++){
        m += line(p[4],p[i],st);
    }

    m += line(p[1],p[3],st);
    m += line(p[1],p[5],st);
    m += line(p[7],p[5],st);
    m += line(p[7],p[3],st);

    return m;
}

// --------------------
// MAIN
// --------------------
void main(){

    vec2 uv = (gl_FragCoord.xy - iResolution.xy*0.5)/iResolution.y;

    float t = iTime * 0.04; // slower, elegant

    float s = sin(t);
    float c = cos(t);
    mat2 rot = mat2(c,-s,s,c);

    vec2 st = uv * rot;

    float m = 0.;

    for(float i=0.; i<1.; i+=1./NUM_LAYERS){

        float z = fract(t+i);
        float size = mix(18.,2.,z);
        float fade = S(0.,.6,z)*S(1.,.8,z);

        m += fade * NetLayer(st*size, i, iTime);
    }

    // --------------------
    // Premium Orange ↔ Deep Red Oscillation
    // --------------------
    float osc = 0.5 + 0.5 * sin(iTime * 0.3); // slower & smoother

    vec3 orange = vec3(1.0, 0.42, 0.05);
    vec3 deepRed = vec3(0.65, 0.05, 0.05);

    vec3 accent = mix(orange, deepRed, osc);

    float intensity = pow(m, 1.6);

    vec3 col = accent * intensity * 0.45;

    // subtle depth vignette
    float vignette = smoothstep(1.2, 0.2, length(uv));
    col *= vignette;

    gl_FragColor = vec4(col,1.0);
}