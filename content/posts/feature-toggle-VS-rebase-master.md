---
title: "Feature Toggle vs Rebase Master"
date: 2020-04-28T19:23:33+08:00
draft: false
---

#### **Feature Toggle Way**

* While a feature in dev
  * Build toggle; Turn on for Dev & off for Prod;
  * Work on stories & apply toggle to them;
  * PR -> Merge to master -> Verify on Staging; *(Iterate story by story)*
* While the feature ready for release
  * Turn toggle on for Prod; *(a commit)*
  * Deploy to prod;

* While the feature is considered STABLE on Prod
  * Clear toggle & related logic; (i.e., overall toggle clean up )
  * PR -> Merge to master -> Verify on Staging -> Deploy to Prod



#### **Rebase Master Way**

* Before start a feature
  * Fork a ***feature branch*** from master
  * Setup pipeline & test environment for ***feature branch***
* While the feature in dev
  * PR -> Merge to ***feature branch*** -> Verify on ***feature test env*** ;
  * Rebase latest ***master*** into  ***feature branch*** regularly (1-3 times a week )
* While the feature ready for release
  * Merge ***feature branch*** to ***master*** -> Deploy to Prod;



#### **Comaprision**

*The effort listed below is indicating the extra effort needed only, exluding daily routine*

---

| Effort             | DevOps                                                       | Dev                                                          | QA                             | Risk |
| :----------------- | :----------------------------------------------------------- | :----------------------------------------------------------- | ------------------------------ | ---- |
| **Feature Toggle** | -                                                            | 1. Build & apply toggle; <br />2. Maintain toggle;<br /> 3. Overall cleanup ; | 3. Verify toggle cleanup work; | More |
| **Rebase Master**  | 1. Pipeline & Test env for feature;<br />2. Cleanup pipeline settings and test env; | 1. Rebase master regularly;                                  | -                              | Less |

---


As mentioned in above table, we could see :

**Feature Toggle** is Dev & QA heavy way with a bit higher risk;

**Rebase Master** is DevOps heavy way with a bit less risk;







