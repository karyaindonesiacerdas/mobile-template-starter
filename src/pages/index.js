import Login from './auth/login';
import Register from './auth/register';
import MenuDonor from './MenuDonor/MenuDonor';
import LoadingStart from './loading';
import persyaratanBiasa from './MenuDonor/_DonorBiasa/persyaratanBiasa/persyaratanBiasa';
import daftarDonorBiasa from './MenuDonor/_DonorBiasa/daftarDonorBiasa/daftarDonorBiasa';
import infoPendonorBiasa from './MenuDonor/_DonorBiasa/infoPendonorBiasa/infoPendonorBiasa';
import admBiasaResult from './MenuDonor/_DonorBiasa/admBiasaResult/admBiasaResult';
import lokasiDonor from './MenuDonor/lokasiDonor/lokasiDonor';
import lokasiGedung from './MenuDonor/lokasiDonor/lokasiGedung/lokasiGedung';
import lokasiMobilUnit from './MenuDonor/lokasiDonor/lokasiMobilUnit/lokasiMobilUnit';
import BarcodeDonor from './MenuDonor/BarcodeDonor/BarcodeDonor';
import EditProfil from './MenuUser/edit-profile/EditProfil';
import GantiPasword from './MenuUser/GantiPasword/GantiPasword';
import KartuDonor from './MenuUser/KartuDonor/KartuDonor';
import ActiveDonor from './MenuUser/ActiveDonor/ActiveDonor';
import ActiveDonorDetail from './MenuUser/ActiveDonor/ActiveDonorDetail';
import RiwayatDonor	from './MenuUser/RiwayatDonor/RiwayatDonor'
import Status from './status';
import Sukses from './suksestempat';
import Barcode3 from './barcodetempat';
import Kegiatan from './kegiatan';
import Barcode2 from './barcodemobilunit';
import Kalender from './kalender';
import {Dashboard, DashboardAdmin} from './dashboard';
import kuisionerBiasa from './MenuDonor/_DonorBiasa/kuisionerBiasa/kuisionerBiasa';
import persyaratanKonvalesen from './MenuDonor/_DonorKonvalesen/persyaratanBiasa/persyaratanKonvalesen';
import daftarDonorkonv from './MenuDonor/_DonorKonvalesen/daftarDonorKonvalesen/daftarDonorkonv';
import infoPendonorKonv from './MenuDonor/_DonorKonvalesen/infoPendonorKonvalesen/infoPendonorKonv';
import infoCovidPendonor from './MenuDonor/_DonorKonvalesen/infoCovidPendonor/infoCovidPendonor';
import kuisonerKonvalesen from './MenuDonor/_DonorKonvalesen/kuisionerKonvalesen/kuisonerKonvalesen';
import agrementKonvalesen from './MenuDonor/_DonorKonvalesen/agrementKonvalesen/agrementKonvalesen';
import admKonvalesenResult from './MenuDonor/_DonorKonvalesen/admKonvalesenResult/admKonvalesenResult';
import lokasiSampel from './MenuDonor/lokasiSampel/lokasiSampel';
import gedungUddKonvalesen from './MenuDonor/lokasiSampel/lokasiGedung/gedungUddKonvalesen';
import agrementPlace from './MenuDonor/_DonorKonvalesen/agrementPlace/agrementPlace';
import barcodeSampel from './MenuDonor/BarcodeSampel/barcodeSampel';
import Konvalesen14 from './konvalesen/konvalesen14';
import Konvalesen15 from './konvalesen/konvalesen15';
import Konvalesen16 from './konvalesen/konvalesen16';
import Konvalesen17 from './konvalesen/konvalesen17';
import Konvalesen19 from './konvalesen/konvalesen19';
import Konvalesen22 from './konvalesen/konvalesen22';
import Konvalesen23 from './konvalesen/konvalesen23';
import { InfoStok01, InfoStok02, InfoStok03 } from './infoStok';
import MobilUnit01 from './mobilUnit/mobilUnit01';
import MobilUnit02 from './mobilUnit/mobilUnit02';
import MenuAlur from './MenuAlur/MenuAlur'
import alurDonorBiasa from './MenuAlur/DonorBiasa/alurDonorBiasa';
import alurDonorKonvalesen from './MenuAlur/DonorKonvalesen/alurDonorKonvalesen'
import permintaanDarah from './MenuAlur/permintaanDarah/permintaanDarah'
import pengadaanDonor from './MenuAlur/pengadaanDonor/pengadaanDonor'
import konselingDonor from './MenuAlur/KonselingDonor/konselingDonor' 
import PermintaanDarah from './permintaandarah';
import ListUser from './user';
import ListPendonor from './listpendonor';
import PermintaanDarah1 from './permintaandarah/permintaan';
import PermintaanSukses from './permintaandarah/sukses';
import Contact from './InfoPMI/Contact/contact';
import InfoKegiatan from './InfoPMI/InfoKegiatan/infoKegiatan';
import InfoKonvalesen from './InfoPMI/InfoKonvalesen/infoKonvalesen';
import Sejarah from './InfoPMI/Sejarah/sejarah';

export {
	Login,
	Register,
	MenuDonor,
	LoadingStart,
	persyaratanBiasa,
	daftarDonorBiasa,
	infoPendonorBiasa,
	lokasiDonor,
	lokasiGedung,
	BarcodeDonor,
	admBiasaResult,
	Status,
	lokasiMobilUnit,
	Sukses,
	Barcode3,
	Kegiatan,
	Barcode2,
	Kalender,
	Dashboard,
	kuisionerBiasa,
	persyaratanKonvalesen,
	daftarDonorkonv,
	infoPendonorKonv,
	infoCovidPendonor,
	kuisonerKonvalesen,
	agrementKonvalesen,
	admKonvalesenResult,
	lokasiSampel,
	gedungUddKonvalesen,
	agrementPlace,
	barcodeSampel,
	Konvalesen14,
	Konvalesen15,
	Konvalesen16,
	Konvalesen17,
	Konvalesen19,
	Konvalesen22,
	Konvalesen23,
	InfoStok01,
	InfoStok02,
	InfoStok03,
	MobilUnit01,
	MobilUnit02,
    DashboardAdmin,
    ActiveDonor,
	ActiveDonorDetail,
	RiwayatDonor,
	MenuAlur,
	alurDonorBiasa,
	alurDonorKonvalesen,
	permintaanDarah,
	pengadaanDonor,
	konselingDonor,
	PermintaanDarah,
	EditProfil,
	ListUser,
	ListPendonor,
	PermintaanDarah1,
	PermintaanSukses,
	GantiPasword,
	KartuDonor,
	Contact,
	InfoKegiatan,
	InfoKonvalesen,
	Sejarah,
};
