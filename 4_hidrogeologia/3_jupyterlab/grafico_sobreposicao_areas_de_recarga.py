# ============================================================
# GRÁFICO DE ÁREAS SOBRE ÁREAS PRIORITÁRIAS DE RECARGA
# ============================================================

import matplotlib.pyplot as plt
import matplotlib.font_manager as fm
import numpy as np


# ============================================================
# 1. CONFIGURAÇÃO DA FONTE
# ============================================================

font_path = r"C:\Windows\Fonts\FRADM.TTF"

font_prop = fm.FontProperties(
    fname=font_path
)


# ============================================================
# 2. DADOS
# ============================================================

classes = [
    "Áreas não prioritárias\nde Recarga",
    "Formação Savânica em\nÁreas de Recarga",
    "Pastagem em Áreas\nde Recarga",
    "Área Urbanizada em\nÁreas de Recarga",
    "Plantação de Soja em\nÁreas de Recarga"
]

areas = [
    11893.61459372,
    25108.73952542896,
    7400.47096968535,
    4889.59664442564,
    5021.747905085792
]


# ============================================================
# 3. POSIÇÃO DOS PONTOS
# ============================================================

x = np.arange(len(classes))


# ============================================================
# 4. FIGURA
# ============================================================

fig, ax = plt.subplots(
    figsize=(8.5, 3.8),
    dpi=300
)


# ============================================================
# 5. LINHA E PONTOS
# ============================================================

ax.plot(
    x,
    areas,
    linewidth=2.0,
    marker="o",
    markersize=6.5
)


# ============================================================
# 6. RÓTULOS DOS VALORES
# ============================================================

for i, valor in enumerate(areas):

    ax.annotate(
        f"{valor:,.2f}".replace(",", "X").replace(".", ",").replace("X", "."),
        (x[i], areas[i]),
        xytext=(0, 8),
        textcoords="offset points",
        ha="center",
        va="bottom",
        fontsize=8.5,
        fontproperties=font_prop
    )


# ============================================================
# 7. EIXO X
# ============================================================

ax.set_xticks(x)

ax.set_xticklabels(
    classes,
    fontsize=8.5,
    fontproperties=font_prop
)

ax.set_xlabel(
    "Classes",
    fontsize=9.5,
    fontproperties=font_prop,
    labelpad=7
)


# ============================================================
# 8. EIXO Y
# ============================================================

ax.set_ylabel(
    "Área (ha)",
    fontsize=9.5,
    fontproperties=font_prop,
    labelpad=7
)


# ============================================================
# 9. TÍTULO
# ============================================================

ax.set_title(
    "Classes de Uso do Solo sobre Áreas de Recarga de Aquífero",
    fontsize=12,
    fontproperties=font_prop,
    pad=10
)


# ============================================================
# 10. GRADE
# ============================================================

ax.grid(
    axis="y",
    linestyle="--",
    linewidth=0.6,
    alpha=0.35
)

ax.grid(
    axis="x",
    visible=False
)


# ============================================================
# 11. REMOÇÃO DAS BORDAS SUPERIORES E DIREITAS
# ============================================================

ax.spines["top"].set_visible(False)
ax.spines["right"].set_visible(False)


# ============================================================
# 12. AJUSTE DOS LIMITES
# ============================================================

ax.set_xlim(
    -0.25,
    len(classes) - 0.75
)

ax.set_ylim(
    0,
    max(areas) * 1.18
)


# ============================================================
# 13. AJUSTE FINAL
# ============================================================

plt.tight_layout()


# ============================================================
# 14. EXPORTAÇÃO
# ============================================================

saida = (
    
    "classes_de_uso_sobre_areas_de_recarga.png"
)


plt.savefig(

    saida,

    dpi=300,

    bbox_inches="tight"
)



# ============================================================
# 15. EXIBIÇÃO
# ============================================================

plt.show()