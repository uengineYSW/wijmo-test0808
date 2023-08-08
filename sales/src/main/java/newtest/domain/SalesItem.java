package newtest.domain;

import java.util.Date;
import java.util.List;
import javax.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;
import org.springframework.beans.BeanUtils;

@Embeddable
@Data
@AllArgsConstructor
@NoArgsConstructor
public class SalesItem {

    @GeneratedValue(strategy = GenerationType.AUTO)
    private Long price;

    @GeneratedValue(strategy = GenerationType.AUTO)
    private String productId;

    @GeneratedValue(strategy = GenerationType.AUTO)
    private Double qty;
}
