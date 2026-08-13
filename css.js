<!DOCTYPE html>
<html lang="pt">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Sénior Seguro - Guia Acessível de Segurança Digital</title>
    <style>
        /* BASE & VARIÁVEIS DE ACESSIBILIDADE */
        :root {
            --bg-color: #f8fafc;
            --text-color: #1e293b;
            --card-bg: #ffffff;
            --primary-color: #0d5c75;
            --primary-hover: #083c4d;
            --accent-color: #d97706;
            --border-color: #cbd5e1;
            --font-scale: 1rem;
            --line-height: 1.6;
            --focus-outline: 3px solid #f59e0b;
        }

        /* MODO ALTO CONTRASTE */
        body.high-contrast {
            --bg-color: #000000;
            --text-color: #ffffff;
            --card-bg: #121212;
            --primary-color: #ffff00;
            --primary-hover: #e6e600;
            --accent-color: #00ffff;
            --border-color: #ffffff;
            --focus-outline: 3px solid #00ffff;
        }

        body.high-contrast header, 
        body.high-contrast footer {
            background-color: #000000 !important;
            border-bottom: 3px solid #ffffff;
        }

        body.high-contrast .card {
            border: 2px solid #ffffff;
        }

        body.high-contrast button {
            background-color: #ffff00 !important;
            color: #000000 !important;
            font-weight: bold;
            border: 2px solid #ffffff !important;
        }

        /* RESET E ESTILOS GERAIS */
        * {
            box-sizing: border-box;
            margin: 0;
            padding: 0;
        }

        /* LINK PARA SALTAR PARA O CONTEÚDO (ACESSIBILIDADE DE TECLADO) */
        .skip-link {
            position: absolute;
            top: -40px;
            left: 10px;
            background: #000000;
            color: #ffffff;
            padding: 8px 16px;
            z-index: 2000;
            text-decoration: none;
            font-weight: bold;
            border-radius: 4px;
            transition: top 0.2s;
        }

        .skip-link:focus {
            top: 10px;
        }

        body {
            font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
            background-color: var(--bg-color);
            color: var(--text-color);
            font-size: calc(var(--font-scale) * 1.15);
            line-height: var(--line-height);
            transition: background-
