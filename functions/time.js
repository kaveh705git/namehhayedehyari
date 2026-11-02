export async function onRequest(context) {
  // این تابع در سرور Cloudflare اجرا می‌شود و همیشه ساعت جهانی دقیق را برمی‌گرداند
  return new Response(JSON.stringify({ 
    serverTime: Date.now() 
  }), {
    headers: { 
      "Content-Type": "application/json",
      "Access-Control-Allow-Origin": "*" // برای اینکه مرورگر کاربر اجازه خواندن آن را داشته باشد
    }
  });
}
