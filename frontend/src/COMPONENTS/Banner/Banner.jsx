import Button from './Button/Button';
import styles from './Banner.module.scss';

const Banner = () => {
    const red = "red";
    const green = "green";
    const blue = "blue";
    const button1Text = "about";
    const button1info = "dumumub is an audio plug-in creation project run by a human person\nthe project intends to provide experimental audio plug-ins for musicians to utilize to produce and/or perform interesting sounds and/or music\nthe plug-ins are free\nenjoy";

    const button2Text = "plugins";
    const button2info = "dumumub-0000003:\n\na wavetable synthesizer that allows the user to create and manipulate wavetables by dragging and dropping audio files and images or drawing in their wave directly onto the plug-in\n\n\ndumumub-0000004:\n\na frequency manipulation tool that allows the user to drag and drop frequency information of an incoming signal in real time\n\nmore plugins coming soon";

    const button3Text = "contact";
    const button3info = "email:\nhi@dumumub.com (soon)\n\ninstagram:\n@dumumub";


    return (
        <div className={styles.Banner}>
            <Button colour={red} text={button1Text} info={button1info} /> 
            <Button colour={green} text={button2Text} info={button2info} /> 
            <Button colour={blue} text={button3Text} info={button3info} />
        </div>
    );
};

export default Banner;