#!/usr/bin/env python
import RPi.GPIO as GPIO
import time
GPIO.setmode(GPIO.BCM)

motor_a_speed_pin=19
motor_a_direction_pin=20
motor_b_speed_pin=17
motor_b_direction_pin=18

GPIO.setup(motor_a_speed_pin,GPIO.OUT,initial=GPIO.LOW)
GPIO.setup(motor_a_direction_pin,GPIO.OUT,initial=GPIO.LOW)
GPIO.setup(motor_b_speed_pin,GPIO.OUT,initial=GPIO.LOW)
GPIO.setup(motor_b_direction_pin,GPIO.OUT,initial=GPIO.LOW)

def stop():
    motor_a_direction_control.ChangeDutyCycle(0)
    motor_a_speed_control.ChangeDutyCycle(0)
    motor_b_direction_control.ChangeDutyCycle(0)
    motor_b_speed_control.ChangeDutyCycle(0)

def forward(speed,duration=1):
    # stop()
    motor_a_direction_control.ChangeDutyCycle(0)
    motor_a_speed_control.ChangeDutyCycle(speed)
    motor_b_direction_control.ChangeDutyCycle(0)
    motor_b_speed_control.ChangeDutyCycle(speed)
    time.sleep(duration)

def reverse(speed,duration=1):
    # stop()
    motor_a_direction_control.ChangeDutyCycle(speed)
    motor_a_speed_control.ChangeDutyCycle(0)
    motor_b_direction_control.ChangeDutyCycle(speed)
    motor_b_speed_control.ChangeDutyCycle(0)
    time.sleep(duration)

motor_b_speed_control=GPIO.PWM(motor_b_direction_pin,50)
motor_b_direction_control=GPIO.PWM(motor_b_speed_pin,50)
motor_b_speed_control.start(0)
motor_b_direction_control.start(0)

motor_a_speed_control=GPIO.PWM(motor_a_direction_pin,50)
motor_a_direction_control=GPIO.PWM(motor_a_speed_pin,50)
motor_a_speed_control.start(0)
motor_a_direction_control.start(0)

forward(15,2)
forward(50,1)
reverse(15,2)
reverse(50,1)
reverse(25,1)
forward(25,1)
stop()