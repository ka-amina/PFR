-- Exercices (sur une table employes avec id, nom, salaire, departement)
-- Faciles
create table employes (
                          id int primary key auto_increment,
                          nom varchar(50),
                          salaire float,
                          departement varchar(255)
);
-- Écrivez une requête pour sélectionner tous les employés.
select * from employes;

-- Sélectionnez uniquement les noms des employés.
select nom from employes;
-- Sélectionnez les employés du département "IT".
select  * from employes where departement = 'IT';

-- Moyens
-- Sélectionnez les employés avec un salaire supérieur à 3000.
select * from employes where salaire > 3000;

-- Sélectionnez les noms et salaires des employés du département "RH".
select nom, salaire from employes where departement = 'RH';

-- Sélectionnez les employés dont le nom commence par "A".
select * from employees where nom like 'A%';

-- Sélectionnez les employés avec un salaire entre 2000 et 4000.
select * from employees where salaire between 2000 and 4000;

-- Difficiles
-- Sélectionnez les employés triés par salaire décroissant
select * from employees order by salaire desc ;

-- Sélectionnez le nom et le département des employés avec un salaire > 2500 et du département "IT".
select nom, departement from employees where salaire > 2500 and departement = 'IT';

-- Sélectionnez les employés dont le nom contient "e" et le département est "Finance".
select * from employees where nom like '%e%' and departement = 'Finance';

