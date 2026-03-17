const WHATSAPP_NUMBER = "919460596406";
const WHATSAPP_TEXT =
  "Hi Karan, I came through your website and wanted to connect.";

const whatsappHref = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(
  WHATSAPP_TEXT
)}`;

export function WhatsAppPing() {
  return (
    <a
      href={whatsappHref}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Ping me on WhatsApp"
      className="fixed bottom-5 right-5 z-50 inline-flex items-center gap-2 rounded-full border-2 border-foreground bg-[#25D366] px-4 py-2 font-display font-bold text-sm text-ink shadow-brutal hover:shadow-none hover:translate-x-[4px] hover:translate-y-[4px] transition-all duration-150"
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 32 32"
        className="h-5 w-5 fill-current"
        aria-hidden="true"
      >
        <path d="M16 3C8.832 3 3 8.728 3 15.77c0 2.497.748 4.898 2.168 6.972L3 29l6.49-2.095A13.057 13.057 0 0 0 16 28.54c7.168 0 13-5.728 13-12.77C29 8.728 23.168 3 16 3Zm0 23.517a10.93 10.93 0 0 1-5.602-1.535l-.402-.24-3.852 1.243 1.255-3.735-.262-.383a10.603 10.603 0 0 1-1.666-5.797C5.47 10.2 10.195 5.54 16 5.54c5.805 0 10.53 4.66 10.53 10.229 0 5.57-4.725 10.748-10.53 10.748Zm5.779-7.88c-.315-.154-1.863-.903-2.152-1.006-.288-.102-.498-.153-.708.154-.21.307-.813 1.006-.997 1.211-.184.205-.367.23-.682.077-.315-.154-1.33-.48-2.534-1.531-.937-.818-1.57-1.827-1.754-2.134-.184-.307-.02-.473.139-.626.143-.138.315-.358.473-.537.158-.179.21-.307.315-.512.105-.205.053-.384-.026-.538-.078-.154-.708-1.672-.971-2.287-.256-.603-.516-.52-.708-.53-.184-.009-.394-.011-.604-.011a1.17 1.17 0 0 0-.84.384c-.289.307-1.103 1.07-1.103 2.608s1.13 3.024 1.287 3.229c.158.205 2.222 3.501 5.382 4.908.752.323 1.337.516 1.794.66.754.239 1.441.206 1.984.125.605-.09 1.863-.761 2.126-1.497.262-.737.262-1.37.183-1.498-.079-.128-.289-.205-.604-.358Z" />
      </svg>
      <span>Ping me</span>
    </a>
  );
}
