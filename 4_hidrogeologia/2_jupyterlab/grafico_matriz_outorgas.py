# ============================================================
# MATRIZ DE INDICADORES DE USO DE ÁGUAS SUBTERRÂNEAS
# ============================================================

import pandas as pd
import matplotlib.pyplot as plt
from matplotlib.lines import Line2D
from matplotlib import font_manager
from pathlib import Path
import os


# ============================================================
# 1. FONTE
# ============================================================

font_path = r"C:\Windows\Fonts\FRADMCN.TTF"

if not os.path.exists(font_path):

    raise FileNotFoundError(
        "A fonte 'Franklin Gothic Demi Cond' não foi encontrada em "
        r"C:\Windows\Fonts\FRADMCN.TTF."
    )

font_prop = font_manager.FontProperties(
    fname=font_path
)

plt.rcParams["font.family"] = font_prop.get_name()


# ============================================================
# 2. LEITURA DA TABELA-MESTRE
# ============================================================

arquivo = Path(
    "C:\BD_Geografia_Agraria\Estatisticas_Modelo_Aquiferos\Tabela_Estatisticas_Completa.csv"
)

df = pd.read_csv(
    arquivo,
    sep=None,
    engine="python"
)

df.columns = df.columns.str.strip()

df["uh_nome"] = (
    df["uh_nome"]
    .astype(str)
    .str.strip()
)


# ============================================================
# 3. INDICADORES
# ============================================================

indicadores = {

    "qtd_pontos_captacao":
        "Pontos de captação",

    "vazao_total_outorgada":
        "Vazão total outorgada",

    "qtd_abastecimento_humano":
        "Abastecimento humano",

    "qtd_criacao_animais":
        "Criação de animais",

    "qtd_industrial":
        "Industrial",

    "qtd_irrigacao":
        "Irrigação",

    "qtd_outros":
        "Outros",

    "qtd_uso_comercial":
        "Uso comercial",

    "qtd_pocos_manuais":
        "Poços manuais",

    "qtd_pocos_tubulares":
        "Poços tubulares"
}


indicadores = {
    coluna: nome
    for coluna, nome in indicadores.items()
    if coluna in df.columns
}


# ============================================================
# 4. CONVERSÃO PARA NUMÉRICO
# ============================================================

for coluna in indicadores:

    df[coluna] = (
        df[coluna]
        .astype(str)
        .str.replace(",", ".", regex=False)
        .str.replace(" ", "", regex=False)
    )

    df[coluna] = pd.to_numeric(
        df[coluna],
        errors="coerce"
    )


# ============================================================
# 5. ORDEM DAS UNIDADES HIDROGRÁFICAS
# ============================================================

ordem_uh = [

    "ALTO RIO SÃO BARTOLOMEU",

    "MÉDIO RIO SÃO BARTOLOMEU",

    "RIBEIRÃO SOBRADINHO"
]


uhs = [
    uh
    for uh in ordem_uh
    if uh in df["uh_nome"].unique()
]


if not uhs:

    uhs = (
        df["uh_nome"]
        .drop_duplicates()
        .tolist()
    )


# ============================================================
# 6. CORES DOS INDICADORES
# ============================================================

cores_indicadores = [

    "#4C78A8",   # Pontos de captação
    "#F58518",   # Vazão total outorgada
    "#54A24B",   # Abastecimento humano
    "#E45756",   # Criação de animais
    "#B279A2",   # Industrial
    "#9C755F",   # Irrigação
    "#E377C2",   # Outros
    "#7F7F7F",   # Uso comercial
    "#BCBD22",   # Poços manuais
    "#17BECF"    # Poços tubulares
]


cores = dict(
    zip(
        indicadores.keys(),
        cores_indicadores
    )
)


# ============================================================
# 7. MARCADORES DAS UHs
# ============================================================

marcadores = {

    "ALTO RIO SÃO BARTOLOMEU":
        "o",

    "MÉDIO RIO SÃO BARTOLOMEU":
        "s",

    "RIBEIRÃO SOBRADINHO":
        "^"
}


# ============================================================
# 8. CORES DAS UHs PARA A LEGENDA
# ============================================================

cores_uh = {

    "ALTO RIO SÃO BARTOLOMEU":
        "#4C78A8",

    "MÉDIO RIO SÃO BARTOLOMEU":
        "#F58518",

    "RIBEIRÃO SOBRADINHO":
        "#54A24B"
}


# ============================================================
# 9. CRIAÇÃO DA FIGURA
# ============================================================

fig, ax = plt.subplots(
    figsize=(13, 6.6)
)


# ============================================================
# 10. ESTRUTURA VERTICAL
# ============================================================

espacamento = 1.0

altura_indicador = 0.48

margem_vertical = 0.08


y_base = {

    coluna:
        i * espacamento

    for i, coluna
    in enumerate(indicadores)
}


# ============================================================
# 11. CONSTRUÇÃO DAS LINHAS E DOS PONTOS
# ============================================================

for coluna, nome_indicador in indicadores.items():

    valores_uh = {}


    # --------------------------------------------------------
    # Valores por UH
    # --------------------------------------------------------

    for uh in uhs:

        linha = df[
            df["uh_nome"] == uh
        ]

        if linha.empty:
            continue

        valor = linha.iloc[0][coluna]

        if pd.notna(valor):

            valores_uh[uh] = float(valor)


    if not valores_uh:
        continue


    valor_min = min(
        valores_uh.values()
    )

    valor_max = max(
        valores_uh.values()
    )


    pontos_x = []

    pontos_y = []


    # ========================================================
    # 12. PONTOS
    # ========================================================

    for x, uh in enumerate(uhs):

        if uh not in valores_uh:
            continue

        valor = valores_uh[uh]


        # ----------------------------------------------------
        # Variação relativa interna
        # ----------------------------------------------------

        if valor_max != valor_min:

            posicao_relativa = (

                (valor - valor_min)

                /

                (valor_max - valor_min)
            )

        else:

            posicao_relativa = 0.5


        # ----------------------------------------------------
        # Posição vertical representativa
        # ----------------------------------------------------

        y = (

            y_base[coluna]

            +

            margem_vertical

            +

            posicao_relativa
            *
            (
                altura_indicador
                -
                2 * margem_vertical
            )
        )


        pontos_x.append(x)

        pontos_y.append(y)


        # ----------------------------------------------------
        # PONTO
        # ----------------------------------------------------

        ax.scatter(

            x,
            y,

            s=65,

            marker=marcadores.get(
                uh,
                "o"
            ),

            color=cores[coluna],

            edgecolors="none",

            zorder=4
        )


        # ====================================================
        # 13. RÓTULO
        # ====================================================

        if coluna == "vazao_total_outorgada":

            if valor.is_integer():

                rotulo = (
                    f"{int(valor):,}"
                    .replace(",", ".")
                )

            else:

                rotulo = (
                    f"{valor:,.2f}"
                    .replace(",", "X")
                    .replace(".", ",")
                    .replace("X", ".")
                )

        else:

            rotulo = (
                f"{int(round(valor)):,}"
                .replace(",", ".")
            )


        # ----------------------------------------------------
        # Evita colisão com o indicador superior
        # ----------------------------------------------------

        if posicao_relativa >= 0.70:

            deslocamento_y = -6

            alinhamento_vertical = "top"

        else:

            deslocamento_y = 6

            alinhamento_vertical = "bottom"


        ax.annotate(

            rotulo,

            xy=(x, y),

            xytext=(
                0,
                deslocamento_y
            ),

            textcoords="offset points",

            ha="center",

            va=alinhamento_vertical,

            fontsize=8.5,

            fontproperties=font_prop,

            zorder=6
        )


    # ========================================================
    # 14. LINHA DO INDICADOR
    # ========================================================

    ax.plot(

        pontos_x,

        pontos_y,

        color=cores[coluna],

        linewidth=1.7,

        alpha=0.85,

        zorder=2
    )


    # ========================================================
    # 15. LINHA-GUIA
    # ========================================================

    ax.axhline(

        y=y_base[coluna],

        color="lightgray",

        linewidth=0.65,

        alpha=0.65,

        zorder=1
    )


# ============================================================
# 16. EIXO X
# ============================================================

ax.set_xticks(
    range(len(uhs))
)

ax.set_xticklabels(

    [
        "Alto Rio São Bartolomeu",

        "Médio Rio São Bartolomeu",

        "Ribeirão Sobradinho"
    ],

    fontsize=9.5,

    fontproperties=font_prop
)


ax.set_xlabel(

    "Unidade hidrográfica",

    fontsize=10.5,

    fontproperties=font_prop,

    labelpad=6
)


# ============================================================
# 17. EIXO Y — INDICADORES E GRANDEZA DOS VALORES
# ============================================================

centros_y = [

    y_base[coluna]
    +
    altura_indicador / 2

    for coluna in indicadores
]


ax.set_yticks(
    centros_y
)


# ------------------------------------------------------------
# Identificação da grandeza/campo de cada indicador
# ------------------------------------------------------------

grandezas = {

    "qtd_pontos_captacao":
        "qtd",

    "vazao_total_outorgada":
        "va_max",

    "qtd_abastecimento_humano":
        "qtd",

    "qtd_criacao_animais":
        "qtd",

    "qtd_industrial":
        "qtd",

    "qtd_irrigacao":
        "qtd",

    "qtd_outros":
        "qtd",

    "qtd_uso_comercial":
        "qtd",

    "qtd_pocos_manuais":
        "qtd",

    "qtd_pocos_tubulares":
        "qtd"
}


# ------------------------------------------------------------
# Monta os rótulos do eixo Y
# ------------------------------------------------------------

rotulos_y = [

    f"{nome} ({grandezas[coluna]})"

    for coluna, nome
    in indicadores.items()
]


ax.set_yticklabels(

    rotulos_y,

    fontsize=8.8,

    fontproperties=font_prop
)


ax.set_ylabel(

    "Indicadores",

    fontsize=10.5,

    fontproperties=font_prop,

    labelpad=6
)


# ============================================================
# 18. LEGENDA DOS INDICADORES
# ============================================================
#
# IMPORTANTE:
# Utilizamos FIG.LEGEND em vez de AX.LEGEND.
#
# Isso garante que a legenda fique fora do eixo e não seja
# substituída pela legenda das unidades hidrográficas.
# ============================================================

handles_indicadores = [

    Line2D(

        [0],
        [0],

        color=cores[coluna],

        linewidth=2.5,

        label=nome

    )

    for coluna, nome
    in indicadores.items()
]


legenda_indicadores = fig.legend(

    handles=handles_indicadores,

    labels=[
        nome
        for nome in indicadores.values()
    ],

    title="Indicadores",

    loc="upper left",

    bbox_to_anchor=(0.80, 0.86),

    bbox_transform=fig.transFigure,

    frameon=False,

    fontsize=8,

    title_fontsize=9,

    handlelength=2.8,

    handletextpad=0.6,

    borderaxespad=0
)


# Aplicar fonte

for texto in legenda_indicadores.get_texts():

    texto.set_fontproperties(
        font_prop
    )


legenda_indicadores.get_title().set_fontproperties(
    font_prop
)


# ============================================================
# 19. LEGENDA DAS UNIDADES HIDROGRÁFICAS
# ============================================================
#
# Símbolo + cor = Unidade hidrográfica
#
# Esta legenda fica abaixo do gráfico.
# ============================================================

handles_uh = [

    Line2D(

        [0],
        [0],

        marker=marcadores[uh],

        linestyle="None",

        markersize=7,

        markerfacecolor=cores_uh[uh],

        markeredgecolor=cores_uh[uh],

        label=uh

    )

    for uh in uhs
]


legenda_uh = fig.legend(

    handles=handles_uh,

    labels=uhs,

    title="Legenda",

    loc="lower center",

    bbox_to_anchor=(0.48, 0.015),

    bbox_transform=fig.transFigure,

    ncol=3,

    frameon=False,

    fontsize=8,

    title_fontsize=9,

    handletextpad=0.5,

    columnspacing=1.5
)


for texto in legenda_uh.get_texts():

    texto.set_fontproperties(
        font_prop
    )


legenda_uh.get_title().set_fontproperties(
    font_prop
)


# ============================================================
# 20. TÍTULO
# ============================================================

ax.set_title(

    "Matriz de Indicadores de Uso de Águas Subterrâneas",

    fontsize=18,

    fontweight="bold",

    fontproperties=font_prop,

    pad=14
)


# ============================================================
# 21. LIMITES
# ============================================================

ax.set_xlim(

    -0.25,

    len(uhs) - 0.75
)


ax.set_ylim(

    -0.15,

    max(y_base.values())
    +
    altura_indicador
    +
    0.25
)


# ============================================================
# 22. GRADE
# ============================================================

ax.grid(

    axis="x",

    linestyle="--",

    linewidth=0.6,

    alpha=0.25
)

ax.set_axisbelow(True)


# ============================================================
# 23. BORDAS
# ============================================================

ax.spines["top"].set_visible(False)

ax.spines["right"].set_visible(False)


# ============================================================
# 24. LAYOUT
# ============================================================
#
# Reservamos:
#
# - direita -> legenda dos indicadores
# - inferior -> legenda das UHs
#
# ============================================================

plt.subplots_adjust(

    left=0.17,

    right=0.72,

    top=0.87,

    bottom=0.20
)


# ============================================================
# 25. EXPORTAÇÃO
# ============================================================

saida = (
    
    "matriz_indicadores_uso_aguas_subterraneas_final.png"
)


plt.savefig(

    saida,

    dpi=300,

    bbox_inches="tight"
)


# ============================================================
# 26. EXIBIÇÃO
# ============================================================

plt.show()
