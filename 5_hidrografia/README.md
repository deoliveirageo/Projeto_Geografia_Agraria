## Mapa de Delimitação Hidrográfica e Vulnerabilidade Hídrica dos Assentamentos Rurais

### Objetivo

O produto cartográfico integra a delimitação hidrográfica das sub-bacias do Ribeirão Sobradinho, Alto Rio São Bartolomeu e Médio Rio São Bartolomeu à análise da proximidade dos assentamentos rurais em relação à rede de drenagem. O objetivo é espacializar a estrutura hidrográfica que condiciona a dinâmica territorial dos assentamentos e subsidiar a interpretação da vulnerabilidade hídrica superficial no recorte de estudo.

### Fluxo metodológico

O processamento foi realizado no **QGIS**, utilizando as ferramentas do **SAGA GIS** sobre o MDE e as bases cartográficas previamente estruturadas no banco de dados geográfico do projeto.

O fluxo principal foi:

**MDE → Fill Sinks (WANG & LIU) → Channel Network and Drainage Basins → Rede de drenagem e ordem de Strahler → Delimitação das sub-bacias → Junctions → Classificação dos nós hidrológicos → Proximidade Euclidiana → Zonas de distância aos canais → Cruzamento com os assentamentos rurais**

O algoritmo **Channel Network and Drainage Basins** foi utilizado para a extração da rede de canais, classificação hierárquica segundo a **ordem de Strahler**, delimitação das sub-bacias e identificação dos principais nós da rede hidrográfica. Os pontos derivados foram classificados em **nascentes, confluências, foz e exutório**, permitindo representar a estrutura e a conectividade da drenagem.

Posteriormente, a rede de canais foi utilizada como referência para o cálculo da **proximidade euclidiana**, obtendo-se a distância espacial dos assentamentos em relação aos corpos hídricos num buffer de 300m à partir dos canais de drenagem. A distância foi espacializada em classes de proximidade, permitindo identificar setores territorialmente mais próximos ou mais afastados da rede de drenagem. A área de drenagem para cálculo da distância euclidiana (proximidade) abrange uma área circular de raio de 10km à partir do centróide médio entre os três polígonos dos assentamentos da área de estudo. 

### Interpretação geográfica

O produto evidencia que a disponibilidade e a acessibilidade aos recursos hídricos não são espacialmente homogêneas entre os assentamentos rurais. A distribuição da rede de drenagem, sua hierarquia e a distância dos assentamentos aos canais expressam condicionantes físico-territoriais relevantes para a organização do espaço agrário, especialmente em áreas onde a produção agrícola depende de fontes superficiais ou de alternativas de abastecimento hídrico.

Na perspectiva da **Geografia Agrária**, a proximidade aos canais constitui um indicador espacial de **acessibilidade potencial ao recurso hídrico**, mas não deve ser interpretada isoladamente como disponibilidade ou segurança hídrica. A distância euclidiana não incorpora vazão, permanência dos cursos d'água, qualidade da água, restrições ambientais, infraestrutura de captação ou condições de acesso e uso pelos produtores. Dessa forma, o mapa representa uma **vulnerabilidade hídrica espacial relativa**, e não a disponibilidade efetiva de água.

A sobreposição da rede hidrográfica com os assentamentos permite ainda identificar desigualdades territoriais na proximidade aos recursos hídricos, contribuindo para análises posteriores de **uso e cobertura da terra, aptidão agrícola, infraestrutura produtiva, acesso à água e vulnerabilidade socioambiental**.

### Produtos derivados

- Sub-bacias hidrográficas;
- Rede de drenagem hierarquizada pela ordem de Strahler;
- Nascentes, confluências, foz e exutório;
- Microbacias de contribuição;
- Distância euclidiana aos canais de drenagem;
- Classes de proximidade da rede hidrográfica;
- Sobreposição das zonas de proximidade com os assentamentos rurais.

> **Nota metodológica:** as zonas de proximidade representadas neste produto correspondem a classes arbitrárias de distância em relação à rede de drenagem. 