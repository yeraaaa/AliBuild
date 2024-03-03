<link rel="stylesheet" type="text/css" href="globals.css" />

<div class='php'>
            <h1 class='php1'>Create Account</h1>
            <div className='my-2'>
              <form action="index.php" class='php2' method='POST'>
                  <input class='input' type="text" name="CustomerName" required placeholder='Enter your first name'></input>
                  <input class='input' type="text" name="CustomerSName" required placeholder='Enter your last name'></input>
                  <input class='input' type="number" name="CustomerPNumber" required placeholder='Enter your phone number'></input>
                  <input class='input' type="text" name="CustomerLogin" required placeholder='Enter your login'></input>
                  <input class='input' type="password" name="CustomerPassword" required placeholder='Enter your password'></input>
                  <input className="submit" type="submit" value="Submit" name="sumbit"></input>
              </form>
            </div>
            <p>Already have an account? <a href="/login" class='pacc'>Sign In Now.</a></p>
</div>