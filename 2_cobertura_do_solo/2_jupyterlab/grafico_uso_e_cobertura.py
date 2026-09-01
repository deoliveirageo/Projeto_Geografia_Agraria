import pandas as pd
import matplotlib.pyplot as plt
from pathlib import Path

# ============================================================
# 1. CAMINHO DO ARQUIVO CSV
# ============================================================

arquivo = Path(
    r"C:\BD_Geografia_Agraria\Tabela_Estatisticas_Cobertura_ha.csv"
)

# ============================================================
# 2. LEITURA DO CSV
# ============================================================

df_raw = pd.read_csv(
    arquivo,
    encoding="utf-8"
)

# Localiza a linha onde começa a tabela de classes
linha_inicio = df_raw[
    df_raw.iloc[:, 0].astype(str).str.strip().eq("Valor")
].index[0]

df = pd.read_csv(
    arquivo,
    skiprows=linha_inicio,
    encoding="utf-8"
)

# ============================================================
# 3. PADRONIZAÇÃO DAS COLUNAS
# ============================================================

df.columns = [
    "valor",
    "classe",
    "cor",
    "contagem_pixel",
    "area_m2",
    "area_ha"
]

# ============================================================
# 4. LIMPEZA DOS DADOS
# ============================================================

# Remove espaços antes/depois dos nomes das classes
df["classe"] = (
    df["classe"]
    .astype(str)
    .str.strip()
)

# Remove espaços das demais colunas de texto
df["cor"] = (
    df["cor"]
    .astype(str)
    .str.strip()
)

# Converte valores numéricos
df["valor"] = pd.to_numeric(
    df["valor"],
    errors="coerce"
)

df["area_ha"] = pd.to_numeric(
    df["area_ha"],
    errors="coerce"
)

# Remove registros inválidos
df = df.dropna(
    subset=["valor", "classe", "area_ha"]
).copy()

# ============================================================
# 5. ORDEM DAS CLASSES
# ============================================================

ordem_classes = [
    3, 4, 9, 11, 12, 15, 21,
    24, 25, 31, 33, 39, 41, 46
]

df["valor"] = pd.Categorical(
    df["valor"],
    categories=ordem_classes,
    ordered=True
)

df = df.sort_values("valor")

# ============================================================
# 6. CORES DAS CLASSES
# ============================================================

cores = {
    3:  "#1f8d49",
    4:  "#7dc975",
    9:  "#7a5900",
    11: "#519799",
    12: "#d6bc74",
    15: "#edde8e",
    21: "#ffefc3",
    24: "#d4271e",
    25: "#db4d4f",
    31: "#091077",
    33: "#2532e4",
    39: "#f5b3c8",
    41: "#f54ca9",
    46: "#d68fe2"
}

df["cor_grafico"] = (
    df["valor"]
    .astype(int)
    .map(cores)
)

# ============================================================
# 7. NOMES COMPACTOS PARA O EIXO X
# ============================================================

nomes_curto = {
    "Formação Florestal": "Formação\nFlorestal",
    "Formação Savânica": "Formação\nSavânica",
    "Silvicultura": "Silvicultura",
    "Área Pantanosa": "Área\nPantanosa",
    "Formação Campestre": "Formação\nCampestre",
    "Pastagem": "Pastagem",
    "Mosaico de Usos": "Mosaico de\nUsos",
    "Área Urbana": "Área\nUrbana",
    "Outras Áreas não Vegetadas": "Outras Áreas\nnão Vegetadas",
    "Aquicultura": "Aquicultura",
    "Corpos Hídricos": "Corpos\nHídricos",
    "Soja": "Soja",
    "Outras Lavouras": "Outras\nLavouras",
    "Café": "Café"
}

df["classe_grafico"] = (
    df["classe"]
    .map(nomes_curto)
)

# ============================================================
# 8. VERIFICAÇÃO
# ============================================================

print("\nClasses utilizadas no gráfico:\n")

print(
    df[
        ["valor", "classe", "classe_grafico", "area_ha"]
    ].to_string(index=False)
)

# Verifica se alguma classe ainda ficou como NaN
if df["classe_grafico"].isna().any():

    print("\nATENÇÃO: existem classes sem nome no gráfico:")

    print(
        df.loc[
            df["classe_grafico"].isna(),
            "classe"
        ].tolist()
    )

    raise ValueError(
        "Há classes sem correspondência no dicionário nomes_curto."
    )

# ============================================================
# 9. FONTE
# ============================================================

plt.rcParams["font.family"] = "Franklin Gothic Demi Cond"

# ============================================================
# 10. CRIAÇÃO DO GRÁFICO
# ============================================================

fig, ax = plt.subplots(
    figsize=(13, 4.8),
    dpi=150
)

barras = ax.bar(
    range(len(df)),
    df["area_ha"],
    color=df["cor_grafico"],
    width=0.92,
    edgecolor="black",
    linewidth=0.4
)

# ============================================================
# 11. VALORES SOBRE AS BARRAS
# ============================================================

valor_maximo = df["area_ha"].max()

for barra, valor in zip(
    barras,
    df["area_ha"]
):

    ax.text(
        barra.get_x() + barra.get_width() / 2,
        barra.get_height() + valor_maximo * 0.012,
        f"{valor:,.0f}".replace(",", "."),
        ha="center",
        va="bottom",
        fontsize=8.5,
        fontweight="bold"
    )

# ============================================================
# 12. EIXO X
# ============================================================

ax.set_xticks(
    range(len(df))
)

ax.set_xticklabels(
    df["classe_grafico"],
    fontsize=9
)

# ============================================================
# 13. EIXO Y
# ============================================================

ax.set_ylabel(
    "Área (ha)",
    fontsize=12,
    fontweight="bold"
)

ax.tick_params(
    axis="y",
    labelsize=9
)

# ============================================================
# 14. TÍTULO
# ============================================================

ax.set_title(
    "Área ocupada por classe de uso e cobertura do solo",
    fontsize=15,
    fontweight="bold",
    pad=12
)

# ============================================================
# 15. GRADE
# ============================================================

ax.grid(
    axis="y",
    linestyle="--",
    linewidth=0.6,
    alpha=0.30
)

ax.set_axisbelow(True)

# ============================================================
# 16. REMOVER BORDAS
# ============================================================

ax.spines["top"].set_visible(False)
ax.spines["right"].set_visible(False)

# ============================================================
# 17. LIMITE SUPERIOR
# ============================================================

ax.set_ylim(
    0,
    valor_maximo * 1.15
)

# ============================================================
# 18. EXPORTAÇÃO DO GRÁFICO
# ============================================================

plt.savefig(
    r"C:\BD_Geografia_Agraria\grafico_uso_cobertura_solo.png",
    dpi=300,
    bbox_inches="tight",
    facecolor="white"
)


# ============================================================
# 19. AJUSTE FINAL
# ============================================================

plt.tight_layout()

plt.show()