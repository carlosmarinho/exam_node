CREATE TABLE users ( `id` INT UNSIGNED NOT NULL AUTO_INCREMENT, `username` VARCHAR(20) NOT NULL, `password` CHAR(60) NOT NULL, PRIMARY KEY (`id`), UNIQUE INDEX `id_UNIQUE` (`id` ASC), UNIQUE INDEX `username_UNIQUE` (`username` ASC) );


CREATE TABLE `product` (
  `id` int(11) NOT NULL,
  `name` varchar(500) NOT NULL,
  `date` datetime NOT NULL DEFAULT CURRENT_TIMESTAMP,
  `price` double(10,2) NOT NULL DEFAULT '0.00',
  `photo` varchar(500) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Fazendo dump de dados para tabela `product`
--

INSERT INTO `product` (`id`, `name`, `date`, `price`, `photo`) VALUES
(1, 'A', '2018-04-27 09:43:58', 30.00, NULL),
(2, 'B', '2018-04-27 09:43:58', 40.00, NULL),
(4, 'C', '2018-04-27 17:39:08', 40.00, 'minha foto'),
(5, 'D', '2018-04-27 17:39:08', 50.00, 'minha foto');
