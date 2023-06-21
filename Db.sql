CREATE TABLE CRCS (
    ID NUMBER(5) PRIMARY KEY,
    Society CLOB NOT NULL,
    Address CLOB NOT NULL,
    State VARCHAR2(50) NOT NULL,
    District VARCHAR2(50),
    Reg_Date DATE NOT NULL,
    Op_Area CLOB,
    Sector_Type CLOB
);
