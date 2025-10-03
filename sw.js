<script>
if ('serviceWorker' in navigator) {
  window.addEventListener('load', () => {
    navigator.serviceWorker.register('/my-finance/sw.js').catch(()=>{});
  });
}
</script>