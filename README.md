# FINMANAGER-BACKEND
<?php
class User {
  // Holds the app’s current MySQLi object
  private $_mysqli;

  // Use the class constructor to store the passed MySQLi object
  public function __construct($mysqli) {
    $this->_mysqli = $mysqli;
  }

  // Here are the user chores we need to handle
  public function createUser() {

  }
  public function verifyUser() {

  }
  public function signInUser() {
 }
  public function sendPasswordReset() {

  }
  public function resetPassword() {

  }
  public function getDistanceUnit() {

  }
  public function updateDistanceUnit() {

  }
  public function deleteUser() {

  }
}
?>
