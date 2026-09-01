// Portal Bom Jesus/RN — comportamentos da barra de acessibilidade
// e pequenas interações de protótipo (sem backend real).
(function(){
  var root = document.documentElement;
  var passos = [15, 16, 17.5, 19, 20.5];
  var idx = 1;

  function aplicarFonte(){
    root.style.fontSize = passos[idx] + 'px';
  }

  var btnMais = document.querySelector('[data-fonte-mais]');
  var btnMenos = document.querySelector('[data-fonte-menos]');
  var btnContraste = document.querySelector('[data-contraste]');

  if (btnMais) btnMais.addEventListener('click', function(){
    idx = Math.min(idx + 1, passos.length - 1);
    aplicarFonte();
  });
  if (btnMenos) btnMenos.addEventListener('click', function(){
    idx = Math.max(idx - 1, 0);
    aplicarFonte();
  });
  if (btnContraste) btnContraste.addEventListener('click', function(){
    document.body.classList.toggle('alto-contraste');
  });

  // filtros de serviços/notícias (apenas front-end, protótipo)
  document.querySelectorAll('.filtro').forEach(function(btn){
    btn.addEventListener('click', function(){
      var grupo = btn.closest('.filtros');
      if (!grupo) return;
      grupo.querySelectorAll('.filtro').forEach(function(b){ b.classList.remove('ativo'); });
      btn.classList.add('ativo');

      var alvo = btn.getAttribute('data-filtro');
      var lista = document.querySelector(btn.getAttribute('data-alvo'));
      if (!lista) return;
      lista.querySelectorAll('[data-categoria]').forEach(function(item){
        var mostrar = alvo === 'todos' || item.getAttribute('data-categoria') === alvo;
        item.style.display = mostrar ? '' : 'none';
      });
    });
  });
})();
