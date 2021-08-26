import React, { Component } from 'react';
import { Container, Header, Content, Badge, Text, Icon } from 'native-base';
export default class BadgeExample extends Component {
  render() {
    return (
      <Container>
        <Header />
        <Content>
          <Badge>
            <Text>1.Sehat, tidak sedang flu, batuk/demam/pusing</Text>
          </Badge>
          <Badge >
            <Text>2.Usia minimal 17 th sd 60 th</Text>
          </Badge>
          <Badge >
            <Text>3.Berat badan ≥ 45 Kg
(a).	Obat antibiotik jenis apapun
(b).	Obat tertentu (konsultasikan dengan dokter atau petugas)
</Text>
          </Badge>
          <Badge >
            <Text>4.Kadar Hemoglobin 12,5 sd 17,0 g/dl</Text>
          </Badge>
          <Badge >
            <Text>5.Cukup istirahat (tidur minimal 4 jam)

            </Text>
          </Badge>
          <Badge >
            <Text>6.Interval donor 
(a).	Metode konvesional adalah ≥ 60 hari
(b).	Metode apheresis adalah 14 hari</Text>
        <Badge >
            <Text>7.Donor perempuan, tidak sedang hamil, menyusui</Text>
          </Badge>
          </Badge>
        </Content>
      </Container>
    );
  }
}