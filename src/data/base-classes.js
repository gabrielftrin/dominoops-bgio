export const baseClasses = [
  {
    class: "Pessoa",
    hierarchy: "",
    leftVar: "",
    leftClass: "",
    topVar: "possui",
    topClass: "Objeto",
    rightVar: "temFilho",
    rightClass: "Pessoa",
    bottomVar: "frequenta",
    bottomClass: "Loja",
  },
  {
    class: "Construtor",
    hierarchy: "Pessoa",
    leftVar: "",
    leftClass: "",
    topVar: "possui",
    topClass: "Ferramenta",
    rightVar: "temFilho",
    rightClass: "Pessoa",
    bottomVar: "frequenta",
    bottomClass: "LojaConstrucao",
  },
  {
    class: "Músico",
    hierarchy: "Pessoa",
    leftVar: "",
    leftClass: "",
    topVar: "possui",
    topClass: "Instrumento",
    rightVar: "temFilho",
    rightClass: "Pessoa",
    bottomVar: "frequenta",
    bottomClass: "LojaInstrumento",
  },
  {
    class: "Cor",
    hierarchy: "",
    leftVar: "",
    leftClass: "",
    topVar: "",
    topClass: "",
    rightVar: "",
    rightClass: "",
    bottomVar: "",
    bottomClass: "",
  },
  {
    class: "Loja",
    hierarchy: "",
    leftVar: "vende",
    leftClass: "Objeto",
    topVar: "temDono",
    topClass: "Pessoa",
    rightVar: "",
    rightClass: "",
    bottomVar: "",
    bottomClass: "",
  },
  {
    class: "LojaInstrumento",
    hierarchy: "Loja",
    leftVar: "vende",
    leftClass: "Instrumento",
    topVar: "temDono",
    topClass: "Pessoa",
    rightVar: "",
    rightClass: "",
    bottomVar: "",
    bottomClass: "",
  },
  {
    class: "LojaConstrucao",
    hierarchy: "Loja",
    leftVar: "vende",
    leftClass: "Ferramenta",
    topVar: "temDono",
    topClass: "Pessoa",
    rightVar: "",
    rightClass: "",
    bottomVar: "",
    bottomClass: "",
  },
  {
    class: "Objeto",
    hierarchy: "",
    leftVar: "temCor",
    leftClass: "Cor",
    topVar: "",
    topClass: "",
    rightVar: "",
    rightClass: "",
    bottomVar: "",
    bottomClass: "",
  },
  {
    class: "Instrumento",
    hierarchy: "Objeto",
    leftVar: "temCor",
    leftClass: "Cor",
    topVar: "",
    topClass: "",
    rightVar: "",
    rightClass: "",
    bottomVar: "",
    bottomClass: "",
  },
  {
    class: "Ferramenta",
    hierarchy: "Objeto",
    leftVar: "temCor",
    leftClass: "Cor",
    topVar: "fabrica",
    topClass: "Objeto",
    rightVar: "",
    rightClass: "",
    bottomVar: "",
    bottomClass: "",
  },
];
