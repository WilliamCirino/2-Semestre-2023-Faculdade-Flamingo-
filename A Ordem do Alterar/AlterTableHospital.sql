-- Adicionando mais uma coluna 'em_atividade' na tabela Dados_medicos
--
Alter Table Dados_medicos add em_atividade varchar(100);

update Dados_medicos set em_atividade = 'Inativo' where id = 5 and id_medico = 10;
update Dados_medicos set em_atividade = 'Ativo' where id != 5 and id_medico != 10;