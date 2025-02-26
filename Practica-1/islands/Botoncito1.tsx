
import type { Signal } from "@preact/signals";
import { useState } from "preact/hooks";

export default function Botoncito1() {
  const [VisibleTexto1, setVisibleTexto1] = useState(false);
  const [VisibleTexto2, setVisibleTexto2] = useState(false);
  const [VisibleTexto3, setVisibleTexto3] = useState(false);

  const [Texto1, setTexto1] = useState("Lorem Ipsum es simplemente el texto de relleno de las imprentas y archivos de texto. Lorem Ipsum ha sido el texto de relleno estándar de las industrias desde el año 1500, cuando un impresor (N. del T. persona que se dedica a la imprenta) desconocido usó una galería de textos y los mezcló de tal manera que logró hacer un libro de textos especimen. No sólo sobrevivió 500 años, sino que tambien ingresó como texto de relleno en documentos electrónicos, quedando esencialmente igual al original. Fue popularizado en los 60s con la creación de las hojas Letraset, las cuales contenian pasajes de Lorem Ipsum, y más recientemente con software de autoedición, como por ejemplo Aldus PageMaker, el cual incluye versiones de Lorem Ipsum ");
  const [Texto2, setTexto2] = useState("Es un hecho establecido hace demasiado tiempo que un lector se distraerá con el contenido del texto de un sitio mientras que mira su diseño. El punto de usar Lorem Ipsum es que tiene una distribución más o menos normal de las letras, al contrario de usar textos como por ejemplo Contenido aquí, contenido aquí. Estos textos hacen parecerlo un español que se puede leer. Muchos paquetes de autoedición y editores de páginas web usan el Lorem Ipsum como su texto por defecto, y al hacer una búsqueda de Lorem Ipsum va a dar por resultado muchos sitios web que usan este texto si se encuentran en estado de desarrollo. Muchas versiones han evolucionado a través de los años, algunas veces por accidente, otras veces a propósito ");
  const [Texto3, setTexto3] = useState("Hay muchas variaciones de los pasajes de Lorem Ipsum disponibles, pero la mayoría sufrió alteraciones en alguna manera, ya sea porque se le agregó humor, o palabras aleatorias que no parecen ni un poco creíbles. Si vas a utilizar un pasaje de Lorem Ipsum, necesitás estar seguro de que no hay nada avergonzante escondido en el medio del texto. Todos los generadores de Lorem Ipsum que se encuentran en Internet tienden a repetir trozos predefinidos cuando sea necesario, haciendo a este el único generador verdadero (válido) en la Internet. Usa un diccionario de mas de 200 palabras provenientes del latín, combinadas con estructuras muy útiles de sentencias, para generar texto de Lorem Ipsum que parezca razonable ");
  
  const [nuevoTexto1, setNuevoTexto1] = useState("");
  const [nuevoTexto2, setNuevoTexto2] = useState("");
  const [nuevoTexto3, setNuevoTexto3] = useState("");
  
  return (
    <div class='Pagina'>
      <div class='Cajon'>
        <div class='Cajon-Inicial'>
          <div>Módulo1</div>
          <div>{!VisibleTexto1 && <button class="Boton" onClick={() => {setVisibleTexto1(true);setNuevoTexto1("")}}>Mostrar más</button>}</div>
          <div>{VisibleTexto1 && <button class="Boton" onClick={() => {setTexto1(Texto1+nuevoTexto1);setVisibleTexto1(false)}}>Mostrar menos</button>}</div>
        </div>
        <div>{VisibleTexto1 && (<div class="Cajon-Texto">
                                  <p>{Texto1}{nuevoTexto1}</p>
                                  <input 
                                    type="text" 
                                    value={nuevoTexto1} 
                                    onInput={(e) => setNuevoTexto1(e.currentTarget.value)} 
                                    placeholder="Input de texto"
                                  />
                                  <button class="Botones" onClick={() => {setTexto1("");setNuevoTexto1("")}}>Eliminar texto</button>
                                  <button class="Botones" onClick={() => setTexto1(Texto1.slice(0, -1))}>Eliminar caracter</button>
                                </div>)}
        </div>
      </div>
      <div className='Cajon'>
        <div class='Cajon-Inicial'>
          <div>Módulo2</div>
          <div>{!VisibleTexto2 && <button class="Boton" onClick={() => {setVisibleTexto2(true);setNuevoTexto2("")}}>Mostrar más</button>}</div>
          <div>{VisibleTexto2 && <button class="Boton" onClick={() => {setTexto2(Texto2+nuevoTexto2);setVisibleTexto2(false)}}>Mostrar menos</button>}</div>
        </div>
        <div>{VisibleTexto2 && (<div class="Cajon-Texto">
                                  <p>{Texto2}{nuevoTexto2}</p>
                                  <input 
                                    type="text" 
                                    value={nuevoTexto2} 
                                    onInput={(e) => setNuevoTexto2(e.currentTarget.value)} 
                                    placeholder="Input de texto"
                                  />
                                  <button class="Botones" onClick={() => {setTexto2("");setNuevoTexto2("")}}>Eliminar texto</button>
                                  <button class="Botones" onClick={() => setTexto2(Texto2.slice(0, -1))}>Eliminar caracter</button>
                                </div>)}
        </div>
      </div>
      <div className='Cajon'>
        <div class='Cajon-Inicial'>
          <div>Módulo3</div>
          <div>{!VisibleTexto3 && <button class="Boton" onClick={() => {setVisibleTexto3(true);setNuevoTexto3("")}}>Mostrar más</button>}</div>
          <div>{VisibleTexto3 && <button class="Boton" onClick={() => {setTexto3(Texto3+nuevoTexto3);setVisibleTexto3(false)}}>Mostrar menos</button>}</div>
        </div>
        <div>{VisibleTexto3 && (<div class="Cajon-Texto">
                                  <p>{Texto3}{nuevoTexto3}</p>
                                  <input 
                                    type="text" 
                                    value={nuevoTexto3} 
                                    onInput={(e) => {setNuevoTexto3(e.currentTarget.value)}} 
                                    placeholder="Input de texto"
                                  />
                                  <button class="Botones" onClick={() => {setTexto3("");setNuevoTexto3("")}}>Eliminar texto</button>
                                  <button class="Botones" onClick={() => setTexto3(Texto3.slice(0, -1))}>Eliminar caracter</button>
                                </div>)}
        </div>
      </div>
    </div>
  );
}
