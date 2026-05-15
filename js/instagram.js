let currentMode = 'ide';

        function switchTab(mode) {
            currentMode = mode;
            const tabIde = document.getElementById('tab-ide');
            const tabFoto = document.getElementById('tab-foto');
            const ideInput = document.getElementById('ide-input');
            const fotoInput = document.getElementById('foto-input');

            if (mode === 'ide') {
                tabIde.classList.add('bg-slate-700', 'text-white');
                tabIde.classList.remove('text-slate-400');
                tabFoto.classList.remove('bg-slate-700', 'text-white');
                tabFoto.classList.add('text-slate-400');
                ideInput.classList.remove('hidden');
                fotoInput.classList.add('hidden');
            } else {
                tabFoto.classList.add('bg-slate-700', 'text-white');
                tabFoto.classList.remove('text-slate-400');
                tabIde.classList.remove('bg-slate-700', 'text-white');
                tabIde.classList.add('text-slate-400');
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
            
            resultBox.innerText = "✨ Sedang menyusun script Reels dan Caption estetik untukmu...";

            // Simulasi AI Script Generation
            setTimeout(() => {
                let script = "";
                const topic = prompt || (currentMode === 'foto' ? "Produk di foto" : "Konten keren");

                if (style === 'genz') {
                    script = `[SCRIPT REELS]\nVisual: Video estetik zoom in ke produk, transisi beat drop.\nAudio: "POV: Lo nemu barang yang bener-bener slay dan ngebantu banget! 💅✨"\n\nVisua[...]`;
                } else if (style === 'casual') {
                    script = `[SCRIPT REELS]\nVisual: Wajah lo di depan kamera (talking head) sambil pegang produk.\nAudio: "Halo guys! Buat kalian yang lagi nyari ${topic}, sini merapat aku punya[...]`;
                } else if (style === 'edukatif') {
                    script = `[SCRIPT REELS]\nVisual: Teks judul besar di layar (Hook Text).\nAudio: "Stop scroll! 3 Hal yang harus kamu tahu tentang ${topic} sebelum nyesel."\n\nVisual: B-roll pr[...]`;
                } else if (style === 'review') {
                    script = `[SCRIPT REELS]\nVisual: Produk dipegang di depan kamera.\nAudio: "Honest Review! Setelah pakai ${topic} selama seminggu penuh, ini hasilnya..."\n\nVisual: Tunjukkan t[...]`;
                } else {
                    script = `[SCRIPT REELS]\nVisual: Suasana rapi/elegan, produk ditampilkan dengan angle profesional.\nAudio: "Selamat pagi rekan-rekan. Jika Anda sedang mencari solusi untuk ${t[...]`;
                }

                resultBox.innerText = script;
            }, 1000);
        }

        function copyToClipboard() {
            const text = document.getElementById('script-result').innerText;
            navigator.clipboard.writeText(text).then(() => {
                alert("Script & Caption berhasil disalin! Tinggal tempel di Instagrammu.");
            });
        }
