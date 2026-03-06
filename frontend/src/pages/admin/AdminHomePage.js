import { Container, Grid, Paper } from '@mui/material'
import SeeNotice from '../../components/SeeNotice';
import Students from "../../assets/img1.png";
import Classes from "../../assets/img2.png";
import Teachers from "../../assets/img3.png";
import Fees from "../../assets/img4.png";
import styled from 'styled-components';
import CountUp from 'react-countup';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import { getAllSclasses } from '../../redux/sclassRelated/sclassHandle';
import { getAllStudents } from '../../redux/studentRelated/studentHandle';
import { getAllTeachers } from '../../redux/teacherRelated/teacherHandle';

const AdminHomePage = () => {
    const dispatch = useDispatch();
    const { studentsList } = useSelector((state) => state.student);
    const { sclassesList } = useSelector((state) => state.sclass);
    const { teachersList } = useSelector((state) => state.teacher);

    const { currentUser } = useSelector(state => state.user)

    const adminID = currentUser._id

    useEffect(() => {
        dispatch(getAllStudents(adminID));
        dispatch(getAllSclasses(adminID, "Sclass"));
        dispatch(getAllTeachers(adminID));
    }, [adminID, dispatch]);

    const numberOfStudents = studentsList && studentsList.length;
    const numberOfClasses = sclassesList && sclassesList.length;
    const numberOfTeachers = teachersList && teachersList.length;

    return (
        <>
            <Container maxWidth="lg" sx={{ mt: 4, mb: 4 }}>
                <Grid container spacing={3}>
                    <Grid item xs={12} sm={6} md={3}>
                        <StatCard accent="#6366f1">
                            <StatIcon>
                                <img src={Students} alt="Students" />
                            </StatIcon>
                            <StatContent>
                                <StatLabel>Total Students</StatLabel>
                                <StatValue start={0} end={numberOfStudents} duration={2.5} />
                            </StatContent>
                        </StatCard>
                    </Grid>
                    <Grid item xs={12} sm={6} md={3}>
                        <StatCard accent="#0ea5e9">
                            <StatIcon>
                                <img src={Classes} alt="Classes" />
                            </StatIcon>
                            <StatContent>
                                <StatLabel>Total Classes</StatLabel>
                                <StatValue start={0} end={numberOfClasses} duration={5} />
                            </StatContent>
                        </StatCard>
                    </Grid>
                    <Grid item xs={12} sm={6} md={3}>
                        <StatCard accent="#8b5cf6">
                            <StatIcon>
                                <img src={Teachers} alt="Teachers" />
                            </StatIcon>
                            <StatContent>
                                <StatLabel>Total Teachers</StatLabel>
                                <StatValue start={0} end={numberOfTeachers} duration={2.5} />
                            </StatContent>
                        </StatCard>
                    </Grid>
                    <Grid item xs={12} sm={6} md={3}>
                        <StatCard accent="#10b981">
                            <StatIcon>
                                <img src={Fees} alt="Fees" />
                            </StatIcon>
                            <StatContent>
                                <StatLabel>Fees Collection</StatLabel>
                                <StatValue start={0} end={23000} duration={2.5} prefix="₹" />
                            </StatContent>
                        </StatCard>
                    </Grid>
                    <Grid item xs={12}>
                        <NoticeCard>
                            <SeeNotice />
                        </NoticeCard>
                    </Grid>
                </Grid>
            </Container>
        </>
    );
};


const StatCard = styled(Paper)`
  padding: 24px;
  display: flex;
  align-items: center;
  gap: 16px;
  border-radius: 16px !important;
  border: 1px solid #f1f5f9;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.04) !important;
  position: relative;
  overflow: hidden;
  transition: all 250ms cubic-bezier(0.4, 0, 0.2, 1);

  &::before {
    content: '';
    position: absolute;
    left: 0;
    top: 0;
    bottom: 0;
    width: 4px;
    background: ${props => props.accent || '#6366f1'};
    border-radius: 0 4px 4px 0;
  }

  &:hover {
    transform: translateY(-2px);
    box-shadow: 0 8px 24px rgba(0, 0, 0, 0.08) !important;
  }
`;

const StatIcon = styled.div`
  width: 48px;
  height: 48px;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-shrink: 0;

  img {
    width: 40px;
    height: 40px;
    object-fit: contain;
  }
`;

const StatContent = styled.div`
  display: flex;
  flex-direction: column;
`;

const StatLabel = styled.span`
  font-size: 0.8125rem;
  font-weight: 500;
  color: #64748b;
  font-family: 'Inter', sans-serif;
  margin-bottom: 4px;
`;

const StatValue = styled(CountUp)`
  font-size: 1.75rem;
  font-weight: 700;
  color: #0f172a;
  font-family: 'Inter', sans-serif;
  letter-spacing: -0.02em;
`;

const NoticeCard = styled(Paper)`
  padding: 24px;
  border-radius: 16px !important;
  border: 1px solid #f1f5f9;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.04) !important;
`;

export default AdminHomePage