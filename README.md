# Automatic Syringe Infusion System
Overview
The Automatic Syringe Infusion System is a microcontroller-based device designed to deliver fluids or medications at a controlled rate using a standard medical syringe. This system is ideal for use in medical, laboratory, and research settings where precise and programmable infusion is required.

# Features
Precise Flow Rate Control: Adjustable infusion rates (e.g., 0.1–100 ml/hr)

User Interface: LCD display and keypad/touch controls for easy operation

Safety Alarms: Alerts for occlusion, empty syringe, and system errors

Programmable Modes: Continuous, bolus, and timed infusion options

Compatibility: Supports various syringe sizes (e.g., 5ml, 10ml, 20ml, 50ml)

Power Supply: Operates on AC adapter or battery backup

# System Requirements
Microcontroller: (e.g., Arduino, Raspberry Pi, STM32)

Motor Driver: For stepper or DC motor control

LCD Display: 16x2 or 20x4 recommended

Keypad/Touchpad: For user input

Power Supply: 9–12V DC (if not USB powered)

Mechanical Components: Linear actuator, syringe holder, plunger mechanism

Sensors: Limit switches, pressure sensor (optional for occlusion detection)

Enclosure: To house electronics and mechanical parts

# Installation
Hardware Assembly

Mount the syringe holder and plunger mechanism.

Connect the motor to the microcontroller via the motor driver.

Install the LCD and keypad/touchpad.

Connect sensors as per the wiring diagram.

# Software Setup

Install the required microcontroller IDE (e.g., Arduino IDE).

Download the firmware from the /firmware directory.

Upload the code to your microcontroller.

Power Up

Connect the system to the power supply.

The LCD should display the welcome screen.

Usage
Load Syringe

Secure the filled syringe into the holder.

Ensure the plunger is aligned with the actuator.

Set Parameters

Use the keypad/touchpad to input infusion rate and volume.

Select the infusion mode (continuous, bolus, timed).

Start Infusion

Press the "Start" button.

Monitor progress on the LCD display.

The system will alert you if any issues arise.

Stop/Reset

Press "Stop" at any time to halt infusion.

Remove the syringe after the process is complete.

Safety Precautions
Always double-check infusion parameters before starting.

Do not leave the system unattended during operation.

Regularly inspect the device for wear or malfunction.

Use only with compatible syringes and fluids.

Demo link :-  https://syringepump-9fc29.web.app/

# Troubleshooting
Issue	Possible Cause	Solution
No power	Faulty adapter/battery	Check/replace power source
Motor not moving	Loose wiring, motor failure	Check connections, replace motor
Alarm sounds	Occlusion, empty syringe	Check for blockages, refill syringe
Incorrect flow rate	Calibration needed	Recalibrate system
Customization
Firmware: Modify /firmware/main.ino to adjust default settings or add features.

Hardware: Adapt the mechanical design for different syringe sizes or mounting options.
