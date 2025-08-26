document.getElementById('cta').addEventListener('click', function() {
            const target = document.getElementById('cardapio');
            const offset = 250; // Ajuste esse valor para controlar o quanto desce

            const targetPosition = target.getBoundingClientRect().top + window.scrollY - offset;

            window.scrollTo({
                top: targetPosition,
                behavior: 'smooth' // Rolagem suave
            });
        });


        document.getElementById('footer-localizacao').addEventListener('click', function() {
            const target = document.getElementById('localizacao');
            const offset = 250; // Ajuste esse valor para controlar o quanto desce

            const targetPosition = target.getBoundingClientRect().top + window.scrollY - offset;

            window.scrollTo({
                top: targetPosition,
                behavior: 'smooth' // Rolagem suave
            });
        });

        document.getElementById('footer-sobre').addEventListener('click', function() {
            const target = document.getElementById('sobre');
            const offset = 250; // Ajuste esse valor para controlar o quanto desce

            const targetPosition = target.getBoundingClientRect().top + window.scrollY - offset;

            window.scrollTo({
                top: targetPosition,
                behavior: 'smooth' // Rolagem suave
            });
        });

        document.getElementById('footer-cardapio').addEventListener('click', function() {
            const target = document.getElementById('cardapio');
            const offset = 250; // Ajuste esse valor para controlar o quanto desce

            const targetPosition = target.getBoundingClientRect().top + window.scrollY - offset;

            window.scrollTo({
                top: targetPosition,
                behavior: 'smooth' // Rolagem suave
            });
        });