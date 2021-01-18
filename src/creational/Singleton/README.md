# Singleton
## Intenção Oficial
 > Garantir que uma classe possua apenas uma instância na aplicação e fornecer um ponto de acesso global para a mesma. Geralmente utilizado para acesso a recurso compartilhados (base de dados, serviços de impressão, interface gráfica, logger, etc), um exemplo são os arquivos de configurações, que uma vez importados no projeto são únicos para o projeto inteiro.
## Conceito
 O Singleton é iniciado apenas uma vez. Portanto quando chamado, se ainda não possui valor, será atribuído o valor de acordo com as regras específicadas, e caso já possua um valor, este valor será retornado.
## Aplicabilidade
 Usável quando uma classe precisa ter somente uma instância no programa ou quando perceber que está utilizando variáveis globais para manter partes importantes do programa, como configurações.
## Vantagem
 - Protege o valor da classe através do encapsulamento, evitando que você altere o valor acidentalmente.
 - Acesso controlado a instância
 - Fácil de aumentar o número de instâncias quando necessário
 - Usa *lazy instantiation*, só é instanciado quando necessário.
## Desvantagem
 - Mais difícil de testar
 - Viola o princípio de responsabilidade única
 - Requer tratamento especial em casos de concorrência
 
 