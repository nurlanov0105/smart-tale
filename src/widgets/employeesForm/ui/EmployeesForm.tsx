"use client"
import React, {useState} from "react";
import {Button, InputField, Select} from "@/shared/ui";
import { RightAction } from "@/entities/rightAction";
import { rightsActionsData } from "@/features/rightActions/model/rightsActions.data";
import {organizationsData} from "@/widgets/employeesForm/model/organizations.data";
import styles from "./styles.module.scss";

const EmployeesForm = () => {
    const [selected, setSelected] = useState(organizationsData[0])

   return (
      <form className={styles.form}>
          <div className={styles.form__row}>
              <h4 className="h4">Организация сотрудника</h4>
              <Select
                  selected={selected}
                  setSelected={setSelected}
                  title="Организация"
                  employees={organizationsData}
              />

              <h4 className="h4">Почта сотрудника</h4>
              <InputField title="Почта" type="email"/>
              <h4 className="h4">Должность сотрудника</h4>
              <Select
                  selected={selected}
                  setSelected={setSelected}
                  title="Должность"
                  employees={organizationsData}
              />
              <div>
                  <h4 className="h4">Выдача прав доступа</h4>
                  <ul className={styles.form__list}>
                      {rightsActionsData.map((action) => (
                          <RightAction {...action} key={action.title}/>
                      ))}
                  </ul>
              </div>
          </div>

          <div className={styles.form__btn}>
            <Button>Пригласить</Button>
         </div>
      </form>
   );
};

export default EmployeesForm;