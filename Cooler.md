# Refrigeración

Los sitemas de refrigeración líquida más populares son all-in-one (AIO). Son kits closed-loop que vienen pre-assembled. Si no estás seguro de cuál kit AIO deberías comprar, el canal YouTube GamersNexus provides extremely thorough reviews. Los kits conectan a tu motherboard via el header USB 2.0 internal. Cuando creas una USB map tienes que considerar esto o no podrás controlarlo. 

Sin incluir otros y kits AIO de la 1a generación de Asetek, tienen memoria volátil o memoria persistente:

1. NZXT y Corsair tienen memoria volátil que that persiste mientras que el PSU está conectado al poder (I).
2. Kits EVGA tienen memoria persistente. Cambiar ajustes con el software en Windows escribe a esta memoria. Si el PSU está apagado (O), no pierdes tus ajustes.

Casi todos usan el mismo hardware internal de Asetek. Es imposible controlarlos usando la motherboard. No son designed así. El three pin connector for the CPU header is only there para report las velocidades de los fans del Pump y Radiador. It is a one-way communication. La única manera de controlar estas variables es por el USB header usando software. Se pueden controlar otros kits AIO que no son basados en Asetek via la motherboard via el 4 pin CPU header. Thermaltake y Deep Cool funcionan así.

Hay utilidades basadas en Python para controlar tu kit en GitHub, pero normalmente no es necesario, ya que configurarlos en Windows will be enough hasta que apagues el PSU. [liquidctl](https://github.com/jonasmalacofilho/liquidctl) (basado en Python) es desarollado para macOS y funciona con unos modelos de NZXT, EVGA, y Corsair.

No hay tantas problemas de compatibilidad con kits AIO kits y macOS. Siguen funcionando regardless of del SO actual mientras que ya los han configurado en Windows.
