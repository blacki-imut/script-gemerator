/*script js*/
        let currentMode = 'ide';

        function switchTab(mode) {
            currentMode = mode;
            const tabIde = document.getElementById('tab-ide');
            const tabFoto = document.getElementById('tab-foto');
            const ideInput = document.getElementById('ide-input');
            const fotoInput = document.getElementById('foto-input');

            if (mode === 'ide') {
                tabIde.classList.add('bg-white', 'shadow-sm', 'fb-blue');
                tabIde.classList.remove('text-slate-500');
                tabFoto.classList.remove('bg-white', 'shadow-sm', 'fb-blue');
                tabFoto.classList.add('text-slate-500');
                ideInput.classList.remove('hidden');
                fotoInput.classList.add('hidden');
            } else {
                tabFoto.classList.add('bg-white', 'shadow-sm', 'fb-blue');
                tabFoto.classList.remove('text-slate-500');
                tabIde.classList.remove('bg-white', 'shadow-sm', 'fb-blue');
                tabIde.classList.add('text-slate-500');
                fotoInput.classList.remove('hidden');
                ideInput.classList.add('hidden');
            }
        }

        function handleFileUpload(event) {
            const file = event.target.files[0];
            if (file) {
                const reader = new FileReader();
                reader.onload = function(e) {
                    document.getElementById('preview-container').classList.remove('hidden');
                    document.getElementById('img-preview').src = e.target.result;
                }
                reader.readAsDataURL(file);
            }
        }

        function generateScript() {
            const prompt = document.getElementById('prompt-text').value;
            const style = document.getElementById('style-select').value;
            const resultBox = document.getElementById('script-result');
            
            resultBox.innerText = "✍️ Sedang menulis postingan yang menarik untukmu...";

            setTimeout(() => {
                let content = "";
                const topic = prompt || "produk/layanan kami";

                if (style === 'storytelling') {
                    content = `Dulu saya sempat bingung... 🤔\n\nSetiap kali mau ${topic}, rasanya kok susah banget ya. Sampai akhirnya saya nemu satu cara/produk yang bener-bener ngerubah segal[...]`;
                } else if (style === 'tips') {
                    content = `Tips Gratis buat Bapak/Ibu sekalian! ✨\n\nBanyak yang nanya ke saya, gimana sih cara optimal buat ${topic}? Nah, ini 3 rahasia simpelnya:\n\n1️⃣ Jangan asal pi[...]`;
                } else if (style === 'jualan') {
                    content = `🔥 PROMO KHUSUS HARI INI SAJA! 🔥\n\nSiapa lagi yang mau ${topic} tapi gak mau ribet? Kabar gembira buat warga FB semua!\n\nKenapa harus pilih kami?\n✅ Kualita[...]`;
                } else if (style === 'diskusi') {
                    content = `Lagi rame banget nih bahas soal ${topic}... 🧐\n\nKalau menurut pendapat temen-temen di grup ini, mendingan pilih yang versi A atau B sih? Jujur saya masih bimbang[...]`;
                } else {
                    content = `PENGUMUMAN PENTING\n\nSehubungan dengan tingginya permintaan terhadap ${topic}, kami informasikan bahwa saat ini layanan/produk tersebut sudah tersedia kembali.\n\nT[...]`;
                }

                resultBox.innerText = content;
            }, 1000);
        }

        function copyToClipboard() {
            const text = document.getElementById('script-result').innerText;
            navigator.clipboard.writeText(text).then(() => {
                alert("Teks postingan berhasil disalin! Silakan tempel di Facebook Anda.");
            });
        }
