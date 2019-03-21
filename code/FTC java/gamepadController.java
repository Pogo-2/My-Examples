package org.firstinspires.ftc.teamcode;


import com.qualcomm.robotcore.eventloop.opmode.OpMode;
import com.qualcomm.robotcore.eventloop.opmode.TeleOp;
import com.qualcomm.robotcore.hardware.DcMotor;
import com.qualcomm.robotcore.hardware.Servo;
import com.qualcomm.hardware.modernrobotics.ModernRoboticsI2cColorSensor;



@TeleOp(name="gamepadController", group="Iterative Opmode")

public class gamepadController extends OpMode {

    //call hardwear
    DcMotor MotorL;
    DcMotor MotorR;
    DcMotor wench;
    DcMotor claw;
    Servo hook;
    double hookPosition = 0;
    Servo latch;
    double latchPosition = 0;
    boolean fine;
    public void init() {
           //init hardwear
           MotorL = hardwareMap.dcMotor.get("mL");
           MotorR = hardwareMap.dcMotor.get("mR");
           wench = hardwareMap.dcMotor.get("wench");
           claw = hardwareMap.dcMotor.get("claw");
           hook = hardwareMap.servo.get("hookServo");
           latch = hardwareMap.servo.get("latch");
           //set direction of motors
           MotorL.setDirection(DcMotor.Direction.FORWARD);
           MotorR.setDirection(DcMotor.Direction.REVERSE);


       }

   public void start() {
        //words of afrimation
        telemetry.addData("keep calm","you got this");

   }
   public void loop() {
        //fine controll
        if(gamepad1.y == true){
            fine = true;
        }
        if(gamepad1.x == true){
            fine = false;
        }

       //inputs
       float rightTrig = gamepad1.right_trigger;

       //forward drive
       if (gamepad1.right_trigger >= .01 && fine == false) {
           MotorR.setPower(gamepad1.right_trigger);
       } else {
           MotorR.setPower(0);
       }

       if (gamepad1.left_trigger >= .01 && fine ==  false) {
           MotorL.setPower(gamepad1.left_trigger);
       } else {
           MotorL.setPower(0);
       }


       //fine drive
       if (gamepad1.right_trigger >= .01 && fine == true) {
           MotorR.setPower(gamepad1.right_trigger/2);
       } else {
           MotorR.setPower(0);
       }

       if (gamepad1.left_trigger >= .01 && fine == true) {
           MotorL.setPower(gamepad1.left_trigger/2);
       } else {
           MotorL.setPower(0);
       }

       //reverse
       if (gamepad1.left_bumper == true) {
           MotorL.setPower(-.5);
       } else {
           MotorL.setPower(0);
       }

       if (gamepad1.right_bumper == true) {
           MotorR.setPower(-.5);
       } else {
           MotorR.setPower(0);
       }

       //arm
       if (gamepad1.right_stick_y < -0.001 ) {
           claw.setPower(-.75);
       }else{
           claw.setPower(0);
       }
       if (gamepad1.right_stick_y > 0.001 ) {
           claw.setPower(.25);
       }else{
           claw.setPower(0);
       }

       //arm hook
       if(gamepad1.dpad_left == true){
           latchPosition = 0;
           latch.setPosition(latchPosition);
       }

       if(gamepad1.dpad_right == true){
           latchPosition = .65;
           latch.setPosition(latchPosition);
       }


        //wench motor
       if (gamepad2.right_bumper == true ) {
           wench.setPower(-.75);
       }else{
           wench.setPower(0);
       }

       if (gamepad2.left_bumper == true ) {
           wench.setPower(.25);
       }else{
           wench.setPower(0);
       }

       //wench hook
       if(gamepad2.x== true){
           hookPosition = .5;
           hook.setPosition(hookPosition);
       }
       if(gamepad2.y == true){
           hookPosition = .9;
           hook.setPosition(hookPosition);

       }



       telemetry.addData("encoder pulse claw",claw.getCurrentPosition());
       telemetry.addData("stick y", gamepad1.right_stick_y);
       telemetry.addData("wench encoder",wench.getCurrentPosition());



       //float test
    telemetry.addData("right X",rightTrig);

   }
public void stop(){
        telemetry.addData("good job","boys");
}

}

