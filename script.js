// ใส่ลิงก์หน้าร้าน Shopee จริงระหว่างเครื่องหมายคำพูด เช่น https://shopee.co.th/ชื่อร้าน
const SHOPEE_URL = "https://shopee.co.th/nammon2945";
const menu = document.querySelector('.menu-toggle');
const nav = document.querySelector('#navigation');
menu.addEventListener('click', () => { const open = menu.getAttribute('aria-expanded') !== 'true'; menu.setAttribute('aria-expanded', String(open)); nav.classList.toggle('open', open); });
nav.querySelectorAll('a').forEach(link => link.addEventListener('click', () => { nav.classList.remove('open'); menu.setAttribute('aria-expanded', 'false'); }));
const dialog = document.querySelector('#shop-dialog');
document.querySelector('#shop-button').addEventListener('click', () => {
  if (SHOPEE_URL) { try { const url = new URL(SHOPEE_URL); if (url.protocol === 'https:') { window.open(url.href, '_blank', 'noopener,noreferrer'); return; } } catch (_) {} }
  dialog.showModal();
});
document.querySelector('.close-dialog').addEventListener('click', () => dialog.close());
dialog.addEventListener('click', event => { if (event.target === dialog) { const rect = dialog.getBoundingClientRect(); if (event.clientX < rect.left || event.clientX > rect.right || event.clientY < rect.top || event.clientY > rect.bottom) dialog.close(); } });
document.querySelector('#copy-name').addEventListener('click', async () => { try { await navigator.clipboard.writeText('PORDEE89'); document.querySelector('#copy-status').textContent = 'คัดลอกชื่อร้านแล้วค่ะ'; } catch (_) { document.querySelector('#copy-status').textContent = 'เลือกและคัดลอกชื่อร้านนี้ได้เลย: PORDEE89'; } });
document.querySelector('#year').textContent = new Date().getFullYear();
