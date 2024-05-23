# Autentisering och JWT

Detta projekt implementerar autentisering med JSON Web Tokens (JWT) i en webbtjänst. Syftet är att tillåta användare att skapa konton, logga in och sedan använda JWT för att autentisera användaren vid varje anrop till resurser som kräver autentisering.

## Funktioner
- **Skapa användarkonto:** Användare kan skapa ett konto genom att ange användarnamn och lösenord.
- **Logga in:** Användare kan logga in med sina registrerade konton.
- **Autentisering med JWT:** Efter inloggning genereras en JWT som skickas till klienten och används för autentisering vid varje anrop till en skyddad sida.
- **Skyddad sida:**  åtkomst till en sida som kräver att användaren är inloggad.

## Databas
Användarkonton lagras i MongoDB Atlas databasen. Lösenorden är hashade i databasen för att skydda mot obehörig åtkomst.


