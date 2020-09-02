# Refrigeración

Los sitemas de refrigeración líquida más populares son coolers all-in-one (AIO). Son kits "closed-loop" que vienen prearmados. Si no estás seguro de cuál kit AIO deberías comprar, el canal YouTube GamersNexus tiene rewiews extremamente detalladas. Los kits se conectan a tu motherboard por el header interno USB 2.0. Cuando creas un USB map tienes que considerar esto, ya que si no lo tienes en cuenta no podrás controlarlo. 

Excluyendo otros y kits AIO de la primera generación de Asetek, tendrán memoria volátil o persistente:

1. NZXT y Corsair tienen memoria volátil que persiste mientras que el PSU está conectado al poder (I).
2. Los kits EVGA tienen memoria persistente. Si cambias los ajustes con el software de EVGA en Windows se escribe a esta memoria. Si tu PSU está apagada (O), no pierdes tus ajustes.

Casi todos usan el mismo hardware interno de Asetek. Es imposible controlarlos usando la placa madre, ya que no son diseñados así. El conector de trés pines para el header del CPU sólo está ahí para reportar las velocidades de los ventiladores del la bomba y el radiador. Es una comunicación unidireccional. La única manera de controlar estas variables es por el USB header usando software. Se pueden controlar otros kits AIO que no son basados en Asetek via la motherboard con el header de 4 pines de tu CPU. Thermaltake y Deep Cool funcionan así.

Hay utilidades basadas en Python para controlar tu kit en GitHub, pero normalmente no es necesario, ya que configurarlos en Windows será suficiente hasta que apagues tu PSU. [liquidctl](https://github.com/jonasmalacofilho/liquidctl) (basado en Python) es desarollado para macOS y funciona con unos modelos de NZXT, EVGA, y Corsair.

No hay tantos problemas de compatibilidad con kits AIO y macOS. Siguen funcionando sin importar el SO que estés corriendo mientras que ya los hayas configurado en Windows.
