document.addEventListener('DOMContentLoaded',()=>{
  const keys={
    'Elétrica':'eletrica','Hidráulica':'hidraulica','Pintura':'pintura',
    'Revestimentos':'revestimentos','Montagens e reparos':'montagens',
    'Reforma completa':'reforma','Jardinagem e piscina':'jardinagem-piscina',
    'Limpeza pós-obra':'limpeza-pos-obra'
  };
  document.querySelectorAll('[data-service]').forEach(link=>{
    const key=keys[link.dataset.service];
    if(key) link.href=`/${key}`;
  });
  document.addEventListener('click',event=>{
    const link=event.target.closest('[data-service]');
    if(!link) return;
    const key=keys[link.dataset.service];
    if(key){event.preventDefault();window.location.href=`/${key}`;}
  },true);
});
