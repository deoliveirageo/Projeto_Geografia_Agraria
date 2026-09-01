# ============================================================
# Perfil sazonal de NDVI por classe fundiaria
# ============================================================
#
# Objetivo:
#   Ler as estatisticas mensais de NDVI exportadas do
#   PostgreSQL/PostGIS e gerar o perfil temporal de NDVI
#   por classe fundiaria.
#
# Entrada:
#   ndvi_classe_estat_aoi.csv
#
# Saida:
#   grafico do perfil sazonal de NDVI
#
# ============================================================


import pandas as pd
import matplotlib.pyplot as plt
import pandas as pd
import matplotlib.pyplot as plt
from matplotlib.font_manager import FontProperties

# ============================================================
# 1. Configuracao
# ============================================================

# Caminho do arquivo CSV
ARQUIVO_CSV = "C:/BD_Geografia_Agraria/ndvi_classe_estat_aoi.csv"


# ============================================================
# 2. Leitura dos dados
# ============================================================

df = pd.read_csv(ARQUIVO_CSV)


# ============================================================
# 3. Verificacao dos dados
# ============================================================

print("\nDimensao da tabela:")
print(df.shape)

print("\nClasses fundiarias:")
print(df["classe_fundiaria"].unique())

print("\nQuantidade de registros por classe:")
print(df.groupby("classe_fundiaria").size())

print("\nPeriodos:")
print(
    df[
        [
            "ordem_temporal",
            "mes",
            "ano",
            "estacao"
        ]
    ]
    .drop_duplicates()
    .sort_values("ordem_temporal")
)


# ============================================================
# 4. Ordenacao temporal
# ============================================================

df = df.sort_values(
    by=["classe_fundiaria", "ordem_temporal"]
)


# ============================================================
# 5. Criacao dos rotulos dos meses
# ============================================================

rotulos_mes = (
    df[
        [
            "ordem_temporal",
            "mes",
            "ano"
        ]
    ]
    .drop_duplicates()
    .sort_values("ordem_temporal")
)


rotulos_mes["rotulo"] = (
    rotulos_mes["mes"].str[:3]
    + "/"
    + rotulos_mes["ano"].astype(str).str[-2:]
)


# ============================================================
# 6. Criacao do grafico
# ============================================================

fig, ax = plt.subplots(
    figsize=(12, 7)
)


# ============================================================
# 7. Classes fundiarias
# ============================================================

classes = [
    "Latifundio",
    "Media Propriedade",
    "Minifundio",
    "Pequena Propriedade"
]


# Caso os nomes possuam acentuacao no CSV,
# utiliza os nomes existentes automaticamente.

# ============================================================
# 8. Plotagem das linhas por classe fundiaria
# ============================================================

classes_disponiveis = df["classe_fundiaria"].unique()

for classe in classes_disponiveis:

    dados = df[
        df["classe_fundiaria"] == classe
    ].sort_values("ordem_temporal")

    ax.plot(
    dados["ordem_temporal"],
    dados["ndvi_medio_classe"],
    marker="o",
    linewidth=2,
    label=classe
)

# ============================================================
# 9. Configuracao da fonte
# ============================================================

fonte = FontProperties(
    family="Franklin Gothic Demi Cond"
)

# ============================================================
# 10. Configuracao dos eixos
# ============================================================

ax.set_xticks(
    rotulos_mes["ordem_temporal"]
)

ax.set_xticklabels(
    rotulos_mes["rotulo"],
    fontproperties=fonte,
    fontsize=14,
    fontweight="bold"
)

ax.set_xlabel(
    "Período",
    fontproperties=fonte,
    fontsize=16,
    fontweight="bold"
)

ax.set_ylabel(
    "NDVI Médio",
    fontproperties=fonte,
    fontsize=16,
    fontweight="bold"
)

ax.set_title(
    "Curva de Vigor Vegetativo por Classe Fundiária",
    fontproperties=fonte,
    fontsize=20,
    fontweight="bold"
)

# ============================================================
# 11. Numeros dos eixos
# ============================================================

for label in ax.get_xticklabels():
    label.set_fontproperties(fonte)
    label.set_fontsize(14)
    label.set_fontweight("bold")

for label in ax.get_yticklabels():
    label.set_fontproperties(fonte)
    label.set_fontsize(14)
    label.set_fontweight("bold")

# ============================================================
# 12. Grade e legenda
# ============================================================

ax.grid(
    True,
    alpha=0.3
)

legenda = ax.legend(
    title="Classe fundiaria",
    prop={
        "family": "Franklin Gothic Demi Condensed",
        "size": 13,
        "weight": "bold"
    }
)

legenda.get_title().set_fontproperties(fonte)
legenda.get_title().set_fontsize(14)
legenda.get_title().set_fontweight("bold")

# ============================================================
# 13. Limites do eixo Y
# ============================================================

ax.set_ylim(
    0,
    0.75
)


# ============================================================
# 14. Ajuste final
# ============================================================

plt.tight_layout()



# ============================================================
# 15. Exportacao
# ============================================================

plt.savefig(
    "Curva_NDVI_Sazonal.png",
    dpi=300,
    bbox_inches="tight"
)


# ============================================================
# 16. Exibicao
# ============================================================

plt.show()