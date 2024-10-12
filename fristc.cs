using System;
namespace Display{
    class Program{
        static void Main()
    {
        // Storing values in variables
        string name = "Bob";
        int messageCount = 3;
        double temperature = 34.4;

        // Displaying the message using Console.Write()
        Console.Write("Hello, " + name + "! ");
        Console.Write("You have " + messageCount + " messages in your inbox. ");
        Console.Write("The temperature is " + temperature + " celsius.");
    }
    }
}