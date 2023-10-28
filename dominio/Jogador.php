<?
    class Jogador{
        private $nome;
        private $pontuacao;
        private $posicao;
        private $qntAcertos;

        public function getNome()
        {
                return $this->nome;
        }

        public function setNome($nome)
        {
                $this->nome = $nome;

                return $this;
        }

        public function getPontuacao()
        {
                return $this->pontuacao;
        }

        public function setPontuacao($pontuacao)
        {
                $this->pontuacao = $pontuacao;

                return $this;
        }
        public function getPosicao()
        {
                return $this->posicao;
        }

        public function setPosicao($posicao)
        {
                $this->posicao = $posicao;

                return $this;
        }
        public function getQntAcertos()
        {
                return $this->qntAcertos;
        }

        public function setQntAcertos($qntAcertos)
        {
                $this->qntAcertos = $qntAcertos;

                return $this;
        }
    }