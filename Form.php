<html>
<body>
    Nama Staff: <?php echo $_POST["NamaPengguna"]?> <br><br>
    No. Telefon: <?php echo $_POST["PhonePengguna"]?><br><br>
    Email: <?php echo $_POST["EmailPengguna"]?><br><br>
    Tarikh Diperlukan: <?php echo $_POST["TarikhPerlu"]?><br><br>
    Masa Diperlukan: <?php echo $_POST["MasaPerlu"]?><br><br>
    Tujuan: <?php echo $_POST["Tujuan"]?><br><br>
    Pusat Tanggungjawab: <?php echo $_POST["Pusat"]?><br><br>
    <p style="border-bottom: 1px solid black"></p>
    
    
    <?php
        if (isset($_POST["Title0"])) {
            echo $_POST["Title0"];
            echo " -> ";
            echo $_POST["Quant0"];
            echo "<br>";
        }
        if (isset($_POST["Title1"])) {
            echo $_POST["Title1"];
            echo " -> ";
            echo $_POST["Quant1"];
            echo "<br>";
        }
        if (isset($_POST["Title2"])) {
            echo $_POST["Title2"];
            echo " -> ";
            echo $_POST["Quant2"];
            echo "<br>";
        }
        if (isset($_POST["Title3"])) {
            echo $_POST["Title3"];
            echo " -> ";
            echo $_POST["Quant3"];
            echo "<br>";
        }
        if (isset($_POST["Title4"])) {
            echo $_POST["Title4"];
            echo " -> ";
            echo $_POST["Quant4"];
            echo "<br>";
        }
        if (isset($_POST["Title5"])) {
            echo $_POST["Title5"];
            echo " -> ";
            echo $_POST["Quant5"];
            echo "<br>";
        }
        if (isset($_POST["Title6"])) {
            echo $_POST["Title6"];
            echo " -> ";
            echo $_POST["Quant6"];
            echo "<br>";
        } 
    ?>
</body>
</html>