# ============================================================
# GRÁFICO DE BARRAS — NDVI MÉDIO HISTÓRICO POR CLASSE FUNDIÁRIA
# ESTAÇÃO SECA × ESTAÇÃO CHUVOSA
# ============================================================

import pandas as pd
import matplotlib.pyplot as plt


# ============================================================
# 1. CONFIGURAÇÃO DA FONTE
# ============================================================

plt.rcParams["font.family"] = "Franklin Gothic Demi Cond"


# ============================================================
# 2. LEITURA DOS DADOS
# ============================================================

arquivo = "C:/BD_Geografia_Agraria/ndvi_classe_estat_aoi.csv"

df = pd.read_csv(arquivo)


# ============================================================
# 3. PADRONIZAÇÃO DOS NOMES DAS COLUNAS
# ============================================================

df.columns = df.columns.str.strip()


# ============================================================
# 4. PADRONIZAÇÃO DA ESTAÇÃO
# ============================================================

df["estacao"] = (
    df["estacao"]
    .astype(str)
    .str.strip()
    .str.capitalize()
)

ordem_estacoes = [
    "Seca",
    "Chuvosa"
]

df["estacao"] = pd.Categorical(
    df["estacao"],
    categories=ordem_estacoes,
    ordered=True
)


# ============================================================
# 5. CONVERSÃO DO NDVI PARA NUMÉRICO
# ============================================================

df["ndvi_medio_classe"] = pd.to_numeric(
    df["ndvi_medio_classe"],
    errors="coerce"
)

df = df.dropna(
    subset=[
        "classe_fundiaria",
        "estacao",
        "ndvi_medio_classe"
    ]
)


# ============================================================
# 6. ORGANIZAÇÃO DOS DADOS
# ============================================================

tabela = df.pivot_table(
    index="classe_fundiaria",
    columns="estacao",
    values="ndvi_medio_classe",
    aggfunc="mean"
)

tabela = tabela.reindex(
    columns=["Seca", "Chuvosa"]
)


# ============================================================
# 7. ORDENAÇÃO DAS CLASSES FUNDIÁRIAS
# ============================================================

try:
    tabela = tabela.sort_index(
        key=lambda x: pd.to_numeric(x)
    )
except (ValueError, TypeError):
    tabela = tabela.sort_index()


# ============================================================
# 8. CONFIGURAÇÃO DO GRÁFICO
# ============================================================

fig, ax = plt.subplots(
    figsize=(14, 8)
)

tabela.plot(
    kind="bar",
    ax=ax,
    color=["red", "green"],
    width=0.75
)


# ============================================================
# 9. TÍTULO
# ============================================================

ax.set_title(
    "NDVI Médio Histórico por Classe Fundiária (2017-2024)",
    fontsize=24,
    fontweight="bold",
    pad=18
)


# ============================================================
# 10. EIXOS
# ============================================================

ax.set_xlabel(
    "Classe Fundiária",
    fontsize=20,
    fontweight="bold",
    labelpad=10
)

ax.set_ylabel(
    "NDVI Médio",
    fontsize=20,
    fontweight="bold",
    labelpad=10
)


# ============================================================
# 11. TAMANHO DOS RÓTULOS DOS EIXOS
# ============================================================

ax.tick_params(
    axis="x",
    labelsize=17
)

ax.tick_params(
    axis="y",
    labelsize=17
)


# ============================================================
# 12. ESCALA DO EIXO Y
# ============================================================

ax.set_ylim(
    0,
    1
)


# ============================================================
# 13. GRADE HORIZONTAL
# ============================================================

ax.grid(
    axis="y",
    linestyle="--",
    alpha=0.3
)

ax.set_axisbelow(True)


# ============================================================
# 14. LEGENDA
# ============================================================

ax.legend(
    title="Estação",
    fontsize=17,
    title_fontsize=18,
    loc="best"
)


# ============================================================
# 15. RÓTULOS DOS VALORES
# ============================================================

for container in ax.containers:

    ax.bar_label(
        container,
        fmt="%.2f",
        padding=4,
        fontsize=14
    )


# ============================================================
# 16. ORIENTAÇÃO DOS RÓTULOS DO EIXO X
# ============================================================

plt.xticks(
    rotation=0,
    ha="center"
)


# ============================================================
# 17. AJUSTE FINAL
# ============================================================

plt.tight_layout()


# ============================================================
# 18. EXPORTAÇÃO DO GRÁFICO
# ============================================================

plt.savefig(
    "ndvi_medio_historico_classe_fundiaria.png",
    dpi=600,
    bbox_inches="tight",
    facecolor="white"
)

# ============================================================
# 19. EXIBIÇÃO
# ============================================================

plt.show()