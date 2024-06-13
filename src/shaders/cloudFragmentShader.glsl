#ifdef GL_ES
precision highp float;
#endif

uniform float time;
uniform vec2 resolution;

void main(void) {
    vec2 position = gl_FragCoord.xy / resolution.xy;

    float gradient = smoothstep(0.0, 1.0, position.y);
    vec3 skyColor = mix(vec3(0.8, 0.9, 1.0), vec3(1.0, 0.8, 0.8), gradient);

    float cloudShape = sin(position.x * 4.0 + time * 0.1) * cos(position.y * 4.0 + time * 0.15);

    vec3 cloudColor = mix(skyColor, vec3(1.0), smoothstep(0.2, 0.8, cloudShape));

    gl_FragColor = vec4(cloudColor, 1.0);
}
