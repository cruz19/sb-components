/// <reference types="react" />
import './mylabel.css';
export interface MyLabelProps {
    /**
    * Este es el mensaje a mostrar en la etiqueta
    */
    label: string;
    /**
    * Este es el tamaño de la etiqueta
    */
    size: 'normal' | 'h1' | 'h2' | 'h3';
    /**
    * Colores básicos del botón
    */
    color?: 'primary' | 'secondary' | 'tertiary';
    /**
* Si quieres todo capitalizado
*/
    allCaps?: boolean;
    /**
     * Color personalizado de la fuente
     */
    fontColor?: string;
    /**
     * Color de fondo personalizado
     */
    backgroundColor?: string;
}
export declare const MyLabel: ({ allCaps, color, label, size, fontColor, backgroundColor }: MyLabelProps) => JSX.Element;
