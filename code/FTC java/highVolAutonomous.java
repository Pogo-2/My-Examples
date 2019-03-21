package org.firstinspires.ftc.teamcode;

import com.qualcomm.robotcore.eventloop.opmode.Autonomous;
import com.qualcomm.robotcore.eventloop.opmode.OpMode;
import com.qualcomm.robotcore.hardware.DcMotor;
import com.qualcomm.robotcore.hardware.Servo;
import com.qualcomm.robotcore.hardware.ColorSensor;


@Autonomous(name="highVolAutonomous", group="Iterative Opmode")
public class highVolAutonomous extends OpMode {
    DcMotor MotorL;
    DcMotor MotorR;
    DcMotor wench;
    DcMotor claw;
    Servo hook;

    //time vars
    boolean sec7;

    // Code to run ONCE when the driver hits INIT

    public void init() {
        //init hardwear
        MotorL = hardwareMap.dcMotor.get("mL");
        MotorR = hardwareMap.dcMotor.get("mR");
        wench = hardwareMap.dcMotor.get("wench");
        claw = hardwareMap.dcMotor.get("claw");
        hook = hardwareMap.servo.get("hookServo");



        //MotorL
        MotorL.setMode(DcMotor.RunMode.STOP_AND_RESET_ENCODER);
        MotorL.setDirection(DcMotor.Direction.FORWARD);
        //MotorR
        MotorR.setMode(DcMotor.RunMode.STOP_AND_RESET_ENCODER);
        MotorR.setDirection(DcMotor.Direction.REVERSE);
        //Wench
        wench.setMode(DcMotor.RunMode.STOP_AND_RESET_ENCODER);
        claw.setMode(DcMotor.RunMode.STOP_AND_RESET_ENCODER);

        //init telemitry
        telemetry.addData("status", "initialized");

    }

    public void init_loop() {

    }

    public void start() {


    }


    public void loop() {
        int wenchRaiseOne = 1600;
        boolean isLowered = true;
        int move1 = 10000;



        //set servo pos
        // hook.setPosition(0);


        //is the bot lowered
           if (wenchRaiseOne <= (wench.getCurrentPosition())-10) {
               isLowered = true;
           } else {
                isLowered = false;
        }

        //raises wench

        if (isLowered == false) {
            wench.setTargetPosition(wenchRaiseOne);
            wench.setPower(-1);
            wench.setMode(DcMotor.RunMode.RUN_TO_POSITION);

            claw.setTargetPosition(-540);
            claw.setPower(-.32);
            claw.setMode(DcMotor.RunMode.RUN_TO_POSITION);


        }else{
            hook.setPosition(.55);
        }
        //7sec timmer
        if(getRuntime() <= 7.0){
            sec7 = false;
        }else{
            sec7 = true;
        }

        //move
        if (sec7 == true) {
            MotorL.setTargetPosition(move1);
            MotorL.setPower(0.5);
            MotorL.setMode(DcMotor.RunMode.RUN_TO_POSITION);

            MotorR.setTargetPosition(move1);
            MotorR.setPower(0.5);
            MotorR.setMode(DcMotor.RunMode.RUN_TO_POSITION);
        }


        //pulse positions
        telemetry.addData("encoder ", wench.getCurrentPosition());
        telemetry.addData("time",getRuntime());
        telemetry.addData("arm_position",claw.getCurrentPosition());
        //its 3am and im coding let me have some fun
        telemetry.addData("BIGATHIN","CHUNGUS");

    }
}






