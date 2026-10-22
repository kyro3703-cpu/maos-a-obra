document.addEventListener('DOMContentLoaded',()=>setTimeout(()=>{
  const map={
    'Elétrica':'eletrica','Hidráulica':'hidraulica','Pintura':'pintura',
    'Revestimentos':'revestimentos','Montagens e reparos':'montagens',
    'Reforma completa':'reforma','Jardinagem e piscina':'jardinagem-piscina',
    'Limpeza pós-obra':'limpeza-pos-obra'
  };
  document.querySelectorAll('a[data-service]').forEach(link=>{
    if(map[link.dataset.service]) link.href='/'+map[link.dataset.service];
  });
},340));
