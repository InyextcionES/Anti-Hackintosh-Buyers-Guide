(window.webpackJsonp=window.webpackJsonp||[]).push([[10],{364:function(e,a,s){"use strict";s.r(a);var n=s(25),o=Object(n.a)({},(function(){var e=this,a=e.$createElement,s=e._self._c||a;return s("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[s("h1",{attrs:{id:"cpus"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#cpus"}},[e._v("#")]),e._v(" CPUs")]),e._v(" "),s("h2",{attrs:{id:"cpus-que-evitar"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#cpus-que-evitar"}},[e._v("#")]),e._v(" CPUs que evitar:")]),e._v(" "),s("p",[e._v("Mientras que las CPUs AMD pueden funcionar, recomendamos que no las uses si puedes utilizar otra cosa, ya que siguen habiendo muchos problemas con ellas ya que no son soportadas nativamente. Requieren de un poco más de trabajo para configurarlas correctamente, pero hay una "),s("a",{attrs:{href:"https://vanilla.amd-osx.com",target:"_blank",rel:"noopener noreferrer"}},[e._v("Guía Vanilla de AMD (guía en inglés)"),s("OutboundLink")],1),e._v(" para aquellos que prefieren CPUs AMD.")]),e._v(" "),s("p",[e._v("Problemas comunes con AMD:")]),e._v(" "),s("ul",[s("li",[e._v("Los productos Adobe no siempre funcionan y no hay arreglos para lightroom por el momento.\n"),s("ul",[s("li",[e._v("Sin embargo, algunos arreglos pueden ser encontrados aquí: "),s("a",{attrs:{href:"https://adobe.amd-osx.com/",target:"_blank",rel:"noopener noreferrer"}},[e._v("Arreglos de Adobe"),s("OutboundLink")],1)]),e._v(" "),s("li",[e._v('Ten en cuenta que estos "arreglos" sólo deshabilitan ciertas funciones, no son soluciones reales.')])])]),e._v(" "),s("li",[e._v("Cubase, REAPER, y otros softwares de audio se crashean cuando los abres\n"),s("ul",[s("li",[e._v("REAPER funciona "),s("em",[e._v("si")]),e._v(" usas el build Clang")]),e._v(" "),s("li",[e._v("No hay una solución para Cubase por el momento")]),e._v(" "),s("li",[e._v("Plugins de Waves también provoca crashes")])])]),e._v(" "),s("li",[e._v("Las máquinas virtuales que se ejecutan fuera del marco de AppleHV no funcionarán (programas como Parallels 15)\n"),s("ul",[s("li",[e._v("VirtualBox funciona bien ya que no usa AppleHV")])])]),e._v(" "),s("li",[e._v("Docker roto\n"),s("ul",[s("li",[e._v("La caja de herramientas de Docker se basa en VirtualBox, muchas funciones no están disponibles con este")])])]),e._v(" "),s("li",[e._v("El simulador de Apple Watch de Xcode está roto en Catalina\n"),s("ul",[s("li",[e._v("Mojave sí funciona")])])]),e._v(" "),s("li",[e._v("La entrada de micrófono no está disponible con AppleALC que requiere VoodooHDA (calidad de audio bastante peor e inestabilidad general)")]),e._v(" "),s("li",[e._v('Problemas de "audio drift" en APUs Ryzen (chips de la serie G)\n'),s("ul",[s("li",[e._v("Un DAC USB es la única solución que no involucre cambiar tu CPU")])])]),e._v(" "),s("li",[e._v("Es difícil configurar la suspensión (o imposible en algunos sistemas)")]),e._v(" "),s("li",[e._v("Falta de administración de energía de la CPU")]),e._v(" "),s("li",[e._v("No todos los puertos USB funcionan en algunas placas madre\n"),s("ul",[s("li",[e._v("Esto se debe a que no están asignados en ACPI, debes agregarlos manualmente en tu DSDT")])])]),e._v(" "),s("li",[e._v("Actualizaciones atrasadas")]),e._v(" "),s("li",[s("s",[e._v("Threadripper de 3ra generación no es soportado en bare-metal")]),e._v(" "),s("ul",[s("li",[e._v("La última BIOS y versión de OpenCore ahora arrancan con CPUs TRx40")])])])]),e._v(" "),s("p",[e._v("CPUs de AMD:")]),e._v(" "),s("ul",[s("li",[e._v("AMD Ryzen 1000")]),e._v(" "),s("li",[e._v("AMD Ryzen 2000")]),e._v(" "),s("li",[e._v("AMD Ryzen 3000")]),e._v(" "),s("li",[e._v("AMD Athlon")]),e._v(" "),s("li",[e._v("AMD ThreadRipper")]),e._v(" "),s("li",[e._v("Serie FX AMD")])]),e._v(" "),s("p",[e._v("Con Intel, gracias a que la mayoría de las CPU son bastante similares, tienen soporte cuando la CPU se falsifica a un modelo compatible. El único inconveniente es que la iGPU rara vez funciona en Atom/Pentium/Celeron, lo que significa que una hackintosh barata con iGPU es imposible con estas CPU. Con respecto a las CPUs X99/LGA 2011-V3, existe el problema de que estas CPU nunca se utilizaron en una Mac real, por lo que existen bastantes problemas al ejecutar macOS en estos sistemas. Evita estos si es posible")]),e._v(" "),s("p",[s("strong",[e._v("Nota para Usarios Dual Socket")]),e._v(": Ten en cuenta que el kernel de macOS solamente soprta 64 hilos. Ten esto en cuenta si tienes un setup con una CPU así. En el caso de que seas un usuario dual socket, tienes que usar "),s("a",{attrs:{href:"https://github.com/acidanthera/bugtracker/files/3703498/AppleMCEReporterDisabler.kext.zip",target:"_blank",rel:"noopener noreferrer"}},[e._v("AppleMCEReporterDisabler"),s("OutboundLink")],1),e._v(" en macOS Catalina y superior.")]),e._v(" "),s("ul",[s("li",[e._v("Intel Atoms")]),e._v(" "),s("li",[e._v("Intel Celerons")]),e._v(" "),s("li",[e._v("Intel Pentiums")]),e._v(" "),s("li",[e._v("Intel X79/LGA 2011")]),e._v(" "),s("li",[e._v("Intel X99/LGA 2011-V3")]),e._v(" "),s("li",[e._v("Intel X299/LGA-2066")])]),e._v(" "),s("div",{staticClass:"custom-block tip"},[s("p",{staticClass:"custom-block-title"},[e._v("Recomendaciones")]),e._v(" "),s("p",[e._v("Nuestras recomendaciones generales para CPUs son las siguientes:")]),e._v(" "),s("ul",[s("li",[e._v("CPUs Semi-modernas Intel para consumidores\n"),s("ul",[s("li",[e._v("El soporte de CPUs en macOS va desde Ivy Bridge hasta Comet Lake.")])])])])]),e._v(" "),s("h2",{attrs:{id:"cpus-incompatibles"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#cpus-incompatibles"}},[e._v("#")]),e._v(" CPUs Incompatibles")]),e._v(" "),s("p",[e._v("Las CPU totalmente no compatibles se dividen en 2 campos: Que sea demasiado vieja para ejecutar macOS o demasiado nuevo, donde los parches no son compatibles")]),e._v(" "),s("p",[s("strong",[e._v("Demasiado antiguos")]),e._v(":")]),e._v(" "),s("p",[e._v("Esto consiste principalmente en CPUs a las que les falta el conjunto de instrucciones SSE4.2 requerido para Mojave y versiones posteriores; puede solucionarlo reemplazando el complemento de telemetría, pero no es lo ideal. Consulta "),s("a",{attrs:{href:"https://github.com/khronokernel/trashOS",target:"_blank",rel:"noopener noreferrer"}},[e._v("la repo trashOS"),s("OutboundLink")],1),e._v(" para obtener más información.")]),e._v(" "),s("ul",[s("li",[e._v("Wolfdale (serie Core2 Duo de Intel)\n"),s("ul",[s("li",[e._v("E7xxx")]),e._v(" "),s("li",[e._v("E8xxx")])])]),e._v(" "),s("li",[e._v("Yorkfeild (serie Core2 Quad de Intel)\n"),s("ul",[s("li",[e._v("E8xxx")]),e._v(" "),s("li",[e._v("E9xxx")])])])]),e._v(" "),s("p",[e._v("Luego están las CPU a las que les falta el SSE4.1 y los conjuntos de instrucciones anteriores, con este tienes soporte hasta OS X 10.11 El Capitan")])])}),[],!1,null,null,null);a.default=o.exports}}]);