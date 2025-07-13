# 🧪 Desafio de Admissão – H&W Development

Este projeto consiste em criar **duas páginas** com foco em marketing digital e vendas:

- Uma **página de vendas (VSL)** com vídeo e ofertas.
- Uma **página de agradecimento** após a finalização da compra.

---

## 📄 Requisitos Técnicos

### Obrigatórios
- HTML
- CSS
- JavaScript
- **Bootstrap 5**

### Permitidos
- Tailwind CSS
- SCSS
- Bibliotecas em Vanilla JS

### Não utilizar
- Frameworks (React, Vue, etc.)
- jQuery
- API externas
- Banco de Dados
- PHP

---

## 📺 Página de Vendas (VSL)

### Estrutura inicial:
1. Seção de vídeo
2. Lista de referências científicas
3. Rodapé

### Após 20:14 do vídeo:
1. Seção de vídeo
2. Contador regressivo de **20:00**
3. Seção de ofertas
4. Seção de garantia
5. Contador de **20:00**
6. Nova seção de ofertas
7. FAQ
8. Contador de **20:00**
9. Última seção de ofertas
10. Rodapé

### Funcionalidades:
- Quando o vídeo atingir 20:14, a nova estrutura deve ser revelada.
- O **contador de 20 minutos** deve iniciar a partir desse ponto.
- O mesmo contador deve aparecer nas três seções onde for exibido.
- A **maior oferta (6 potes)** deve estar em destaque.
- Ao clicar em "Comprar", um **popup** com os campos `nome`, `email` e `telefone` deve aparecer com botão de finalização.
- Após finalizar, redirecionar para a **Página de Agradecimento**.

---

## 🎁 Página de Agradecimento

### Deve conter:
- Texto de agradecimento
- Dados do produto comprado
- Imagem do produto
- Bônus (diferente conforme a quantidade de potes)
- Dados do usuário
- Rodapé

> Os placeholders entre colchetes (ex: `[Nome do Produto]`) devem ser substituídos dinamicamente com os dados da compra.

### Bônus conforme quantidade:
- **6 potes** → Bônus 1
- **3 potes** → Bônus 2
- **2 potes** → Bônus 3

---

## 📦 Conteúdo de cada seção

### 🔥 Ofertas

| Oferta | Supply | Garantia | Preço Total | Desconto | Frete |
|--------|--------|----------|-------------|----------|--------|
| 2 Potes | 60 dias | 60 dias | $158 (de $358) | X% OFF | $9.99 |
| 3 Potes | 90 dias | 60 dias | $207 (de $537) | X% OFF | Grátis |
| 6 Potes | 180 dias | 60 dias | $294 (de $1074) | X% OFF | Grátis |

**Ordem dos cards:**
- No **desktop**: 2 | 6 | 3
- No **mobile**: 6 | 3 | 2

---

### 🛡 Garantia

> 100% Satisfaction or Your Money Back – 180-Day Guarantee

Inclui selos como:
- No GMO
- GMP
- 100% Natural
- FDA Approved

---

### ❓ FAQ (Perguntas Frequentes)

1. **É seguro usar [Produto]?**  
2. **Quanto tempo até ver resultados?**  
3. **Preciso seguir dieta ou treinar?**  
4. **Posso usar com outros suplementos?**  
5. **Quando recebo meu pedido?**  
6. **Como tomar [Produto]?**

---

## 📚 Referências Científicas

A lista completa de estudos científicos usados na seção de "Scientific References" está disponível no PDF original e deve ser incluída na página.

---

## ✅ Avaliação

A entrega será avaliada com base em:

1. Cumprimento dos requisitos
2. UI/UX
3. Legibilidade e organização do código
4. Responsividade do layout
5. Lógicas e soluções aplicadas
6. Apresentação visual (design)

---

## 🌐 Sites de Referência

- https://mitolyn.com/  
- https://getheartfreedom.com/  
- https://glucofreedom.com/vsl-cb/

---

© H&W Development – Natty Lean Research 2025.
