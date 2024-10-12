//
// ================================================
// | Grafica pe calculator                        |
// ================================================
// | Laboratorul II - 02_01_Shader.frag |
// ======================================
// 
//  Shaderul de fragment / Fragment shader - afecteaza culoarea pixelilor;
//

#version 330 core

in vec4 ex_Color;
out vec4 out_Color;

//	Variabilele uniforme;
uniform int codColShader;

//	Actualizeaza culoarea in functie de codColShader;
void main(void)
  {
	switch (codColShader)
    {
        case 0:
            out_Color = ex_Color;
            break;
        case 1:
            out_Color = vec4(1.0, 0.0, 0.0, 1.0); // Ro?u
            break;
        case 2:
            out_Color = vec4(0.0, 1.0, 0.0, 1.0); // Verde
            break;
        case 3:
            out_Color = vec4(0.0, 0.0, 1.0, 1.0); // Albastru
            break;
        case 4:
            out_Color = vec4(1.0, 1.0, 0.0, 1.0); // Galben
            break;
        case 5:
            out_Color = vec4(1.0, 0.0, 1.0, 1.0); // Magenta
            break;
        default:
            out_Color = vec4(1.0, 1.0, 1.0, 1.0); // Alb pentru cazuri neacoperite
            break;
    }
  }
 