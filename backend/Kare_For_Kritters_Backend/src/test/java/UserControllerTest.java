
import com.Kare_For_Kritters_Backend.Kare_For_Kritters_Backend.example.dto.Userdto;
import com.Kare_For_Kritters_Backend.Kare_For_Kritters_Backend.example.impl.UserServiceImpl;
import com.Kare_For_Kritters_Backend.Kare_For_Kritters_Backend.example.model.Application;
import com.Kare_For_Kritters_Backend.Kare_For_Kritters_Backend.example.model.Profile;
import com.Kare_For_Kritters_Backend.Kare_For_Kritters_Backend.example.model.User;
import com.Kare_For_Kritters_Backend.Kare_For_Kritters_Backend.example.repository.ApplicationRepository;
import com.Kare_For_Kritters_Backend.Kare_For_Kritters_Backend.example.repository.ProfileRepository;
import com.Kare_For_Kritters_Backend.Kare_For_Kritters_Backend.example.repository.UserRepository;
import com.Kare_For_Kritters_Backend.Kare_For_Kritters_Backend.example.controller.userController;
import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.Test;
import org.mockito.InjectMocks;
import org.mockito.Mock;
import org.mockito.MockitoAnnotations;
import org.springframework.security.crypto.password.PasswordEncoder;

import static org.junit.jupiter.api.Assertions.assertNotNull;
import static org.mockito.Mockito.*;

class UserControllerTest {

    @InjectMocks
    private userController userController; // Updated class name

    @Mock
    private UserRepository userRepository;

    @Mock
    private ApplicationRepository applicationRepository;

    @Mock
    private ProfileRepository profileRepository;

    @Mock
    private PasswordEncoder passwordEncoder;

    @Mock
    private UserServiceImpl userServiceImpl;

    @BeforeEach
    void setUp() {
        MockitoAnnotations.openMocks(this);
    }

    @Test
    void testRegisterUser() {
        Userdto userdto = new Userdto();
        userdto.setUserName("testUser");
        userdto.setPassword("testPassword");
        // Set other fields as necessary

        userController.printData(userdto); // Call the method

        // Verify that saveUser is called with a User object
        verify(userRepository, times(1)).save(any(User.class)); // Adjust if needed
    }

    @Test
    void testSendApplication() {
        Application application = new Application();
        // Populate application fields as necessary

        userController.sendApp(application); // Call the method

        // Verify that application is saved
        verify(applicationRepository, times(1)).save(application); // Adjust if needed
    }


    @Test
    void testSetProfile() {
        Profile profile = new Profile();
        // Populate profile fields as necessary

        userController.setProfile(profile); // Call the method

        // Verify that profileRepository.save is called
        verify(profileRepository, times(1)).save(profile);
    }
}
