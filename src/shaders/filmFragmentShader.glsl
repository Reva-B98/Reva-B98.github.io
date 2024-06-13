#ifdef GL_ES
precision highp float;
#endif

uniform float time;
uniform vec2 resolution;

float random(vec2 co) {
    return fract(sin(dot(co.xy, vec2(12.9898, 78.233))) * 43758.5453);
}

void main(void) {
    vec2 uv = gl_FragCoord.xy / resolution.xy;
    vec3 color = vec3(0.0);

    // Film grain effect
    float grain = random(gl_FragCoord.xy + time) * 0.1;
    color += grain;

    // Vignette effect
    float dist = distance(uv, vec2(0.5));
    color *= smoothstep(0.8, 0.5, dist);

    // Scan lines effect
    color *= step(mod(gl_FragCoord.y, 2.0), 1.0);

    gl_FragColor = vec4(color, 0.1); // Semi-transparent
}
