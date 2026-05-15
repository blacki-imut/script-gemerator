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
            
            resultBox.innerText = "⚡ Sedang meracik script viral untukmu...";

            // Simulasi AI Script Generation
            setTimeout(() => {
                let script = "";
                const topic = prompt || (currentMode === 'foto' ? "Produk di foto" : "Konten keren");

                if (style === 'genz') {
                    script = `[HOOOK - 0-3s]\nVisual: Zoom in ke produk dengan transisi cepat.\nAudio: "Pov: Lu nemu barang yang bener-bener slay abis dan anti-rugi parah! 💅✨"\n\n[BODY - 3-15[...]`;
                } else if (style === 'casual') {
                    script = `[HOOK]\n"Halo guys! Kalian sering ngerasa bingung cari ${topic}? Sini kumpul, aku punya solusinya!"\n\n[BODY]\n"Nah, aku baru aja nyobain ini dan hasilnya bener-bener[...]`;
                } else if (style === 'edukatif') {
                    script = `[HOOK]\n"Banyak yang belum tahu kalau ${topic} itu penting banget buat kita. Ini alasannya..."\n\n[BODY]\n"Secara teknis, produk ini mengandung formula yang membantu [...]`;
                } else if (style === 'review') {
                    script = `[HOOK]\n"Jujur review! Setelah pakai ${topic} selama seminggu, ini hasilnya..."\n\n[BODY]\n"First impression aku: Wanginya enak, gak lengket. Plus pointnya adalah har[...]`;
                } else {
                    script = `[HOOK]\n"Selamat siang rekan-rekan. Ingin meningkatkan produktivitas dengan ${topic}? Simak penjelasan berikut."\n\n[BODY]\n"Produk ini dirancang dengan standar kuali[...]`;
                }

                resultBox.innerText = script;
            }, 1000);
        }

        function copyToClipboard() {
            const text = document.getElementById('script-result').innerText;
            navigator.clipboard.writeText(text).then(() => {
                alert("Script berhasil disalin! Tinggal tempel di kontenmu.");
            });
                  }
